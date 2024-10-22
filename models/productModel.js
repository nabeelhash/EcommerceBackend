const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    
    category: [{
        type: String
    }],
    stock: {
        type: Number,
        default: 1,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        rating:{
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }],
    numOfReviews:{
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Product = mongoose.model("myproducts", productSchema);
module.exports = Product
