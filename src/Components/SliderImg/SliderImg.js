import React from 'react';
import './SliderImg.css';

function SliderImg({ src }) {
    return <img src={src} alt='slider-image' className='sliderImg' />;
}

export default SliderImg;
