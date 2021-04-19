import React, { useEffect, useState } from 'react';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import './Payment.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../Reducer';
import axios from '../../axios';
import { db } from '../../firebase';



function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState('');
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);  // Important for Stripe transactions

    useEffect(() => {
        // generate the special stripe secret which allow us to charge a customer.
        // However, when ever the contents in the basket changes, we need to update stripe ( get a new client secret)..letting it know that prices have changed

        const getClientSecret = async () => {
            const response = await axios ({  // Axios is a way of making request ( post, get etc...). It's a popular fetch library.It allows you to interact with APIs very easily
                method: 'post',
                // Stripe expects the total in a currencies' subunits. (e.g For USD, stripe expects to you pass the toal in cents. i.e $10 => 1000 cents)
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret) 
        }

        getClientSecret(); // This is how you run an async function in a useEffect
    }, [basket]) // It runs whenever the payment process loads, and when the contents of the variable/dependency (basket) changes

    console.log('THE SECRET IS >>>>', clientSecret)

    const handleSubmit = async (event) => {
        // do all the fancy stripe code...

        event.preventDefault(); // Stop it from refreshing
        setProcessing(true); // This will disable the button. This will stop you from being able to click the button more than once

        // Through clientSecret, stripe gets the amount charged to the customers
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {  // .then() is a promise. So what is saying that after running through the previous code, it should run the present code ( {paymentIntent} ) under the following conditions
            // paymentIntent is like the payment confirmation. (confirmation of the payment, whether it succeeded or failed)

            // This is using the noSQL data structure ( collection-document, collection-document data structure), after the transaction have been deemed succesful
            db
                .collection('users') // We are accessing the 'users' collection ( or category )
                .doc(user?.uid) // This means we are telling the database to access the doc -- user's id. ( so in the 'users' category, we are selecting each user)
                .collection('orders') // We are going into the selected user's orders
                .doc(paymentIntent.id) // We are creating a document using the paymentIntent.id as like the order's ID
                .set({ // We add this information into the created document
                    basket: basket, // We pass in the basket items ( note: this is before emptying the basket down below )
                    amount: paymentIntent.amount, // We pass in the amount to be paid
                    created: paymentIntent.created // This will give us a timestamp of when the order was created
                })


            setSucceeded(true); 
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders') // We use replace instead of push, because we dont want the user to be able to go back to the payment page. (e.g like if they press the 'back' arrow on the browser). So it basically just replaces the payment page.
        })
    }

    const handleChange = event => {
        /* Listen for changes in the CardElement and display
        any errors as the customer inputs their card details */
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');  // Show error message if there's an error, else show nothing
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to='/checkout'>
                                {basket?.length} items
                            </Link>)
                </h1>
               
                {/* Payment section - Delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 Chevron Drive</p>
                        <p>Lekki Phase 1, LA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items And Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Stripe code */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__priceContainer'>
                            <CurrencyFormat 
                                renderText={(value) => (
                                    <h3>
                                        Order Total: {value}
                                    </h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                {/* If it's still processing, then say processing, else say Buy Now */}
                            </button>
                            </div>

                            {/* Errors, '&&' means 'only then'. Thus, if there's an error, 
                            only then shall it display the error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Payment;
