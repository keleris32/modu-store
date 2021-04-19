const functions = require("firebase-functions");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);


// API... The following processes are to set up an API

// - App config... To set up the express server
const app = express();

// - Middlewares
app.use(cors({ origin: true })); // You can think of it as some form of security
app.use(express.json()); // Allows us to send data and parse it in json format

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;
    // this query parameter is gotten from getClientSecret variable

    console.log('Payment Request Receieved BOOm!!! For this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Sub-units of the currency
        currency: 'usd',
    });

    // Ok - Created ( This is like a feedback-- 'Ok, it was created or whatever)
    response.status(201).send({
        clientSecret: paymentIntent.client_secret, 
    })
});

// - Listen command
exports.api = functions.https.onRequest(app); // this is where the cloud functions come into play (https => secure function)


// Example endpoint
// http://localhost:5001/modu-store/us-central1/api

 /* To run the api on a emulator to test it out, run the following code in the 'functions' folder of the terminal:
    firebase emulators:start */