import React, {useState} from 'react';
import './Home.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SliderImg from '../SliderImg/SliderImg';
import Product from '../Products/Products';
import book from '../../Images/1bettergatsby.jpg';
import fruit from '../../Images/c53fc90e40e5aad07fd37e004adfee2a.jpg'
import buds from '../../Images/71LcAql4+aL._AC_SL1500_.jpg';
import lamp from '../../Images/61np5gVjFJL._AC_SL1500_.jpg';
import ssd from '../../Images/61MGrHUMWzL._AC_SL1500_.jpg';
import headset from '../../Images/61iHiW114KL._SL1200_.jpg';
import tv from '../../Images/51NKhnjhpGL._AC_SL1024_.jpg';
import chair from '../../Images/715tYiaXBtL._AC_SL1500_.jpg';
import ipad from '../../Images/815ztYEEwYL._AC_SL1500_.jpg';
import i1 from '../../Images/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg';
import i2 from '../../Images/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg';
import i3 from '../../Images/Fuji_TallHero_Computers_1x._CB432469755_.jpg';
import i4 from '../../Images/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg';
import light from '../../Images/5133zlDeMcL._AC_SL1000_.jpg';
import webcam from '../../Images/61BGZKR0OBL._AC_SL1500_.jpg';
import server from '../../Images/51R3LRiz+qL._AC_SL1000_.jpg';
import lock from '../../Images/71yMxKIl4hL._AC_SL1500_.jpg';
import pad from '../../Images/61o7ai+YDoL._SL1441_.jpg';
import phonecase from '../../Images/7170UxHMtZL._AC_SL1500_.jpg';
import cabinet from '../../Images/81vZEQIJIDL._AC_SL1500_.jpg';
import fridge from '../../Images/81Nd9+oIr2L._AC_SL1500_.jpg';



function Home() {

    const [hover, setHover] = useState(false);
    const onHover = () => setHover(!hover);

    return (
        <div className='home'>
            <div className='home__container'>
                <div className='home__slider'>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        totalSlides={4}
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        isPlaying={hover ? false : true}
                        interval={4000}
                    >
                        <Slider>
                            <Slide index={0} >
                                <SliderImg src={i1} /> 
                            </Slide>
                            <Slide index={1} >
                                <SliderImg src={i2} /> 
                            </Slide>
                            <Slide index={2} >
                                <SliderImg src={i3} /> 
                            </Slide>
                            <Slide index={3} >
                                <SliderImg src={i4} /> 
                            </Slide>
                        </Slider>
                        <ButtonBack className='pure_btn left__btn'>Back</ButtonBack>
                        <ButtonNext className='pure_btn right__btn'>Next</ButtonNext>
                    </CarouselProvider>   
                </div>

                <div className='home__row'>
                    <Product
                        id='0000' 
                        title='My Summer of Third Wheeling: A Memoir by Nick Carraway'
                        price={12.99}
                        rating={4}
                        image={book}
                    />
                    <Product 
                        id='0001' 
                        title='Costway Electric Blender, Fruit Mixer Grinder and Fruit Vegetable Processor - 1000W'
                        price={54.99}
                        rating={3}
                        image={fruit}
                    />
                
                </div>

                <div className='home__row'>
                    <Product 
                        id='0010' 
                        title='Samsung Galaxy Buds Live, True Wireless Earbuds w/Active Noise Cancelling (Wireless Charging Case Included)'
                        price={138.75}
                        rating={5}
                        image={buds}
                    />
                    <Product 
                        id='0011' 
                        title='Brightech Maxwell - Modern LED Shelf Floor Lamp - Skinny End Table and Nightstand for Bedroom - Combo Narrow Side Table with Standing Accent Light Attached - Asian Tower Book Shelves - Black'
                        price={74.99}
                        rating={4}
                        image={lamp}
                    />
                    <Product 
                        id='0100' 
                        title='Seagate Storage Expansion Card for Xbox Series X|S 1TB Solid State Drive - NVMe Expansion SSD for Xbox Series X|S (STJR1000400)'
                        price={218.99}
                        rating={5}
                        image={ssd}
                    />
                </div>
 
                <div className='home__row'>
                    <Product 
                        id='0101' 
                        title='SAMSUNG QN32Q50RAFXZA Flat 32" QLED 4K 32Q50 Series Smart TV'
                        price={447.95}
                        rating={4}
                        image={tv}
                    />
                </div>

                <div className='home__row'>
                    <Product 
                        id='0110' 
                        title='Turtle Beach Stealth 600 Gen 2 Wireless Gaming Headset for Xbox One and Xbox Series X|S'
                        price={99.95}
                        rating={3}
                        image={headset}
                    />
                    <Product 
                        id='0111' 
                        title='Modway EEI-757-BLK Articulate Ergonomic Mesh Office Chair in Black'
                        price={140.55}
                        rating={5}
                        image={chair}
                    />
                    <Product 
                        id='1000' 
                        title='New Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Gray (2nd Generation)'
                        price={845.22}
                        rating={5}
                        image={ipad}
                    />
                </div>



                <h1 className='top__title'>New Arrivals</h1>
                    <div className='home__row'>
                        <Product 
                            id='2222' 
                            title='10" RGB Selfie Ring Light with Stand Phone Holder Adjustable Desk LED Light'
                            price={20.99}
                            rating={0}
                            image={light}
                        />
                        <Product 
                            id='2223' 
                            title='2021 AutoFocus 1080p Webcam with Stereo Microphone and Privacy Cover, NexiGo FHD USB Web Camera, for Streaming Online Class'
                            price={54.99}
                            rating={0}
                            image={webcam}
                        />
                        <Product 
                            id='2224' 
                            title='HP ProLiant ML30 Gen10 Tower Server Bundle with Intel Xeon E-2136, 32GB DDR4, 8TB SSD, Windows Server 2019 Standard'
                            price={939.25}
                            rating={0}
                            image={server}
                        />
                        <Product 
                            id='2225' 
                            title='Kwikset Halo Touch Contemporary Square Wi-Fi Fingerprint Smart Lock No Hub Required featuring SmartKey Security in Matte Black (99590-004)' 
                            price={200.95}
                            rating={0}
                            image={lock}
                        />
                    </div>
                    <div className='home__row'>
                        <Product 
                            id='2226' 
                            title='DualSense Wireless Controller'
                            price={69.98}
                            rating={0}
                            image={pad}
                        />
                        <Product 
                            id='2227' 
                            title='Samsung Galaxy S21 Ultra Case, Rugged Protective Cover - Black'
                            price={38.99}
                            rating={0}
                            image={phonecase}
                        />
                        <Product 
                            id='2228' 
                            title='Oriental Furniture Rosewood Jewelry Cabinet with 5 Drawers - Dark Rosewood'
                            price={212.65}
                            rating={0}
                            image={cabinet}
                        />
                        <Product 
                            id='2229' 
                            title='NewAir Beverage Refrigerator Cooler - Mini Bar Beer Fridge with Right Hinge Glass Door - Cools to 34F - AB-1200 - Stainless Steel'
                            price={310.58}
                            rating={0}
                            image={fridge}
                        />
                    </div>



                <h1 className='top__title'>Top Sales</h1>
                <div className='home__row'>
                    <Product 
                        id='0010' 
                        title='Samsung Galaxy Buds Live, True Wireless Earbuds w/Active Noise Cancelling (Wireless Charging Case Included)'
                        price={138.75}
                        rating={0}
                        image={buds}
                    />
                    <Product 
                        id='0111' 
                        title='Modway EEI-757-BLK Articulate Ergonomic Mesh Office Chair in Black'
                        price={140.55}
                        rating={0}
                        image={chair}
                    />
                    <Product 
                        id='1000' 
                        title='New Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Gray (2nd Generation)'
                        price={845.22}
                        rating={0}
                        image={ipad}
                    />
                    <Product 
                        id='0100' 
                        title='Seagate Storage Expansion Card for Xbox Series X|S 1TB Solid State Drive - NVMe Expansion SSD for Xbox Series X|S (STJR1000400)'
                        price={218.99}
                        rating={0}
                        image={ssd}
                    />
                </div>

                <div className='sub__container'>
                    <h1>Subscribe</h1>
                    <h5>For Monthly Newsletter, Discounts and More</h5>
                    <form>
                        <input 
                            type='text' 
                            placeholder='Enter your E-mail here ...' 
                        />
                        <button type='submit'>Subscribe Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;
