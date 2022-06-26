const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const productcartSchema = new mongoose.Schema(
    {
        product:{
            type: ObjectId,
            ref: "Product"
        },
        name:{
            type: String
        },
        count:{
            type: Number
        },
        price:{
            type: Number
        }
    }
);

const orderSchema = new mongoose.Schema(
    {
        products:[productcartSchema],
        transaction_id: {},
        amount:{
            type:Number
        },
        address:{
            type: String,
            updated: Date
        },
        user:{
            type: ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);

const Order= mongoose.model("Order",orderSchema);
const ProductCart = mongoose.model("ProductCart",productcartSchema);

module.exports = {Order,ProductCart};