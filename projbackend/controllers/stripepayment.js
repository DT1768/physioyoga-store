const stripe = require("stripe")("sk_test_51LKPLlSGpg0HTbbHSzClb3ig0FAYUVZCfUrtWx3dRtsYAF12EajjKQe4buPmPEw4U8a8aMqtLfyfBvollcqwAaMh00DyQ37SC7")
const uuid = require("uuid/v4")

exports.makePayment = (req, res) => {
    const {products, token} = req.body;
    console.log("PRODUCTS", products);

    let amount = 0;
    products.map(p => {
        amount = amount + p.price;
    });

    const idempotencykey = uuid();


    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.paymentIntents
        .create(
            {
            amount: amount * 100,
            currency: "INR",
            customer: customer.id,
            receipt_email: token.email,
            automatic_payment_methods: {enabled: true},
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.addres_line1,
                    line2: token.card.addres_line2,
                    city: token.card.address_city,
                    postal_code: token.card.address_zip,
                    country: token.card.address_country
                }
            }
        })
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err));
    })
};