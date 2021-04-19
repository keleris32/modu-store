import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import Order from './Order';
import './Orders.css';

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
                .collection('users') // Access users collection
                .doc(user?.uid) // Access the user that's currently logged in
                .collection('orders') // Access the user's orders
                .orderBy('created', 'desc') // Order the user's orders based on the date 'created' in a descending order; meaning the most recent order would be at the top.
                .onSnapshot(snapshot => ( // This gives us a realtime 'snapshot' of the database ( like what it contains and stuff). Thus if we push or remove a value from the database, it will respond in realtime based on that value
                    setOrders(snapshot.docs.map(doc => ({ // Returns the orders as docs and maps through every single one, where it returns the following object for each sincle doc
                        id: doc.id, // The object's id
                        data: doc.data() // The object's data
                    })))
                    /* This maps through all the documents stored in the orders collection, get the id of a docuemnt 
                    and stores it as an 'id' key, get the data of the document (i.e-: id, rating, amount, title etc) 
                    and store it in a data key ( data() ). It basically stores it as an array, then we will set
                    the order's variable in our state to that array ( setOrder ) */
                ))
        } else {
            setOrders([])
        }
            
    }, [user]) // Empty brackets means you want the useEffecr hook to run only once, but since we are using a user variable, then the hook would be dependent on it

    return (
        <div className='orders'>
            <h1>Your Order</h1>
            
            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders;
