const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    shippingInfo: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            required: true,
        },

        phoneNo: {
            type: Number,
            required: true,
        },
    },
    orderItems: [
        {
            quantity: {
                type: Number,
                required: true,
            },

            product: {
                type: mongoose.Schema.ObjectId,
                ref: "Product",
                required: true,
            },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
   
    itemsPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    orderStatus: {
        type: String,
        required: true,
        default: "Processing",
    },
    deliveredAt: Date,
    
    paidAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Order = mongoose.model("Order", orderSchema);
module.exports = Order
