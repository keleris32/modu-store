import React, { useState, useEffect } from 'react';
import SliderImg from '../SliderImg/SliderImg';
import './Slider.css';
import i1 from '../../Images/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg';
import i2 from '../../Images/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg';
import i3 from '../../Images/Fuji_TallHero_Computers_1x._CB432469755_.jpg';
import i4 from '../../Images/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg';

function Slider() {

    // An array for the components to be displayed
    let sliderArr = [
        <SliderImg src={i1} />, 
        <SliderImg src={i2} />, 
        <SliderImg src={i3} />, 
        <SliderImg src={i4} />
    ]

    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };

    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    

    return (
        <div className='slider'>
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className='slide' 
                        style={{ transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }

            {/* Navigation buttons */}
            <button className='goLeft' onClick={goLeft}>Left</button>
            <button className='goRight' onClick={goRight}>Right</button>

        </div>
    )
}

export default Slider;
