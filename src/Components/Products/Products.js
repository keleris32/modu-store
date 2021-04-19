import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Products.css';


function Product({ id, title, price, rating, image }) {
        const [state, dispatch] = useStateValue();

        const addToBasket = () => {
            // dispatch the item into the data layer
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                },
            });
        };

    return (
        <div className='product'>
            <div className='product__info'>
                <p className='product__title'>{title}</p>
                <p className='product__price'>
                    <small>$</small> {/*  &#x20A6; Unicode for Naira Sign  */}
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => ( <p>&#127775;</p>))}
                     
                </div>
            </div>

            <img src={image} alt='An Item' />

            <button onClick={addToBasket}>Add to Cart</button>
            
        </div>
    )
}

export default Product;
