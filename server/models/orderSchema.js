const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    phone: {
        type:Number,
        required: true
    },
    services: {
        type:"String",
        required: true
    },
    weight: {
        type:Number,
        required: true
    },
    pickupDate: {
        type:Date,
        required: true
    },
    pickupTime: {
        type:String,
        required: true
    },
    deliveryDate: {
        type:Date,
        required: true
    },
    deliveryTime: {
        type:String,
        required: true
    }
})
const Orders = new mongoose.model("order", orderSchema)
module.exports = Orders