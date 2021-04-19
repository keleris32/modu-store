import React from 'react';
import { useStateValue } from '../../StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import headset from '../../Images/61iHiW114KL._SL1200_.jpg';



function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'> 
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt='Image ad'
                />

                <div>
                    {/* To add user email above the h2 tag below, you use: <h3>{user?.email}</h3> 
                    ... You can decide to style the h3 tag. The question mark is too help with any errors
                     ( check Header.js for a more in-depth explanation) */}
                    <h2 className='checkout__title'>Your shopping Cart</h2>

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

            <div className='checkout__right'>
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout;
