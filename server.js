const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51MprzFLp3GFxf9mEQfYe0D3BzqPfdFCJK2sJ8YpPYYqXYH4jppeI6LHu0BJgMC0HSqTncwy4K8SMI6QxDjMYhgfH00VWoxxJZd");
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome into React online store website");
});

app.post("/checkout", async (req, res) => {
    let error;
    let status;

    try{
            const {product, token} = req.body;
            const customer = await stripe.customers.create({
                email: token.email,
                source: token.id
            })
            const key = uuidv4();
            const charge = await stripe.charges.create(
                {
                    amount: product.price * 100,
                    currency: "usd",
                    customer: customer.id,
                    receipt_email: token.email,
                    description: 'All Products Description',
                    shipping: {
                        name: token.card.name,
                        address: {
                            line1: token.card.address_line1,
                            line2: token.card.address_line2,
                            city:  token.card.address_city,
                            country:  token.card.address_country,
                            postel_code: token.card.adress_zip
                        }
                    }
                },
                {idempotencyKey: key})

                status = "Success";
    }
    catch(error)
    {
        console.log(error);
        status = "Error";
        
    }

    res.json({status});
})

app.listen(8080, () => {
    console.log("Your app is running on port number 8080");
});
