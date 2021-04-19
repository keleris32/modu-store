import React from 'react';
import './Header.css';
import {FaHornbill} from 'react-icons/fa';
import {BiNoEntry, BiSearchAlt} from 'react-icons/bi';
import {TiShoppingCart} from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';


const cart = {
    textDecoration: 'none',
    color: 'white',
    height: '100%'
}

const logo = {
    textDecoration: 'none',
    color: '#000'
}


function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
            // This variable signs out when called upon (onClick) if there's a user logged in (user)
        }
    }

    return (
        <div className='header'>
            <Link to='/' style={logo}>
            <div className='logo__div'>
                <FaHornbill className='header__logo' />
                <span className='header__title'>
                    <h1>Modu|</h1>
                    <h1 style={{ color: '#8b1010' }}>Stores</h1>
                </span>
            </div>
            </Link>
            
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <BiSearchAlt className='header__searchLogo' />
            </div>

            <div className='header__nav'>
            <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
            {/* Only redirect to the login in page, if there's no user */}
                <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLineOne'>Hello {user ? 
                    user.email : 'Guest'}</span>  {/* user?.email || 'Guest' */}
                    {/* This is to display the user's email if user is logged in, and guest if user is logged out. 
                    The question mark is optional chaining...We use it coz there's an asynchronous period 
                    when it wont load in the user because it's trying to fetch it from firebase. 
                    So we use optional chaining to curb it from showing errors. */}

                    <span className='header__optionLineTwo'>{user ?
                    'Sign Out' : 'Sign In'}</span>
                    {/* If the user is Logged in, it will display 'Sign out', else it will display 'Sign In' ig not logged in */}
                </div>  
            </Link>

            <Link to='/orders' style={{ textDecoration: 'none' }}>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
            </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </div>

            <Link to='/checkout' style={cart}>
                <div className='header__optionBasket'>
                     <TiShoppingCart className='header__shoppingCart' />
                     <span className='header__basketCount'>
                        {/* The question mark is used to so that context API would 'gracefully' handle any error that appears */}
                       {basket?.length}   
                     </span>
                </div>
            </Link>
            
        </div>
    )
}

export default Header;