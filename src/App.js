import Header from './Components/Navbar/Header';
import Home from './Components/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './Components/Footer/Footer';
import Payment from './Components/Payment/Payment';
import Orders from './Components/Orders/Orders';

const promise = loadStripe(
  'pk_test_znClE06SB5Mp0pC5wpaykgaw00fVnXlwaT'
  // test key!
);


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // The user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
          // Note: for this context APIs the type is "SET_USER" and the 'action' is "user: authUser"
        })
        // This will 'dispatch' the user information (authUser) into the context API ( data layer) anytime a user logs in.
        // Thus if the user is logged in or refreshes the page, it sets the user to whoever was logged in from firebase(authUser).

      } else {
        // The user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
          // If the user is logged out, it sets the user (authUser) to null (meaning nobody is logged in).
        })
      }
    })
  }, [])
  // Use effect is like a (listener), dynamic IF statment for React. The empty backets at the end ([]), means that the useEffect will only run once when the ap component loads.
  // If there is a variable in the input brackets ([]), the UseEffect will run when there's a change in that variable.

  return (
    <Router>
      <div className="app"> 
        <Switch>
        <Route path="/orders">
            <Header />    
            <Orders />
          </Route>
          <Route path="/login">   
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />   
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
