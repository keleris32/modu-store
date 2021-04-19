import React from 'react';
import './Footer.css';
import { FaFacebookF, FaHornbill, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const logo = {
    textDecoration: 'none',
    color: '#000'
}


function Footer() {
    return (
        <div className='footer__footer'>
        <div className='footer'>
            <div className='footer__wrap'>
                <div className='footer__linksCon'>
                    <div className='footer__linksWrap'>
                        <div className='footer__linkItems'>
                            <h1>Get to Know Us</h1>
                            <a href='/'>Careers</a>
                            <a href='/'>Blog</a>
                            <a href='/'>About Us</a>
                            <a href='/'>Customer Service</a>
                            <a href='/'>Privacy Policy</a>
                        </div>
                        <div className='footer__linkItems'>
                            <h1>Our Products</h1>
                            <a href='/'>Computers & Accessories</a>
                            <a href='/'>Furnitures</a>
                            <a href='/'>About Us</a>
                            <a href='/'>Household Appliances</a>
                            <a href='/'>Gadgets</a>
                        </div>
                    </div>
                    <div className='footer__linksWrap'>
                        <div className='footer__linkItems'>
                            <h1>Contact Us</h1>
                            <a href='/'>Contact</a>
                            <a href='/'>Support</a>
                            <a href='/'>Destinations</a>
                            <a href='/'>Sponsorships</a>
                            <a href='/'>Refunds & Returns</a>
                        </div>
                        <div className='footer__linkItems'>
                            <h1>Account</h1>
                            <a href='/'>My account</a>
                            <a href='/'>Cart</a>
                            <a href='/'>Checkout</a>
                        </div>
                    </div>
                </div>
                <div className='socialMedia'>
                    <hr className='footer__line' />
                    <div className='socialMedia__wrap'>
                        
                        <Link to='/' style={logo}>
                            <div className='footer__logo'>
                                <FaHornbill className='header__logo' style={{ marginLeft: '0px' }} />
                                    <span className='header__title'>
                                        <h1 style={{ color: '#fff' }}>Modu|</h1>
                                        <h1 style={{ color: '#8b1010' }}>Stores</h1>
                                    </span>
                            </div>
                        </Link>
                        <div className='website__rights'>
                            &copy; {new Date().getFullYear()} | All rights reserved
                        </div>
                        <div className='social__icons'>
                            <a href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebookF  /> 
                            </a>
                            <a href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram /> 
                            </a>
                            <a href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube /> 
                            </a>
                            <a href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter /> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>    
        </div> 
        </div>
    )
}

export default Footer;
