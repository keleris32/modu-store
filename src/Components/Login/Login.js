import React, { useState } from 'react';
import { FaHornbill } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './Login.css';



const logo = {
    textDecoration: 'none',
    color: '#000'
}

const calligraphy = {
    fontFamily: "'Lily Script One', cursive",
    fontSize: '14px'
}



function Login() {
    const history = useHistory(); // This enables us to "programmatically" change the URL. More like redirecting th page.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // This prevents react from refreshing while storing inputted data in variable

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
     // This prevents react from refreshing while storing inputted data in variable

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                // It successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                    // This is to redirect to homepage after successfully creating account.
                }
            })
            .catch(error => alert(error.message))

        {/* You can also type the above like this:- auth.createUserWithEmailAndPassword(email, password).then((auth ..)) etc */}

    }



    return (
        <div className='login'>
            <Link to='/' style={logo}>
            <div className='login__logo'>
                <FaHornbill className='header__logo' style={{ marginLeft: '0px' }} />
                <span className='header__title'>
                    <h1>Modu|</h1>
                    <h1 style={{ color: '#8b1010' }}>Stores</h1>
                </span>
            </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    {/* This takes the inputted data (onChange) and set's its 'value' to the variable (email) */}

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    {/* This takes the inputted data (onChange) and set's its 'value' to the variable (password) */}


                    <button type='submit' onClick={signIn} className='login__signInButton' >Sign In</button>
                </form>

                <p>
                    By signing-in, you agree to <span style={calligraphy}>Modu| <span>Stores'</span></span> 
                    Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our
                    Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create Account</button>
            </div>
        </div>
    )
}

export default Login;
