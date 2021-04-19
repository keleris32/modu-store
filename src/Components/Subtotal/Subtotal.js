import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../Reducer';
import { useHistory } from 'react-router-dom';


function Subtotal() {
    const history = useHistory();  {/* From react router-dom */}
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subtotal'> 
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> 
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
            {/* The onClick function fires off an event that pushes the 'history' to the browsr. 
            More like it redirects the present page to another page '/payment'. Using this instead a Link 
            is better coz it doesn't affect the styling of the button element even as it act as a 'link */}
        </div>
    )
} 

export default Subtotal;
