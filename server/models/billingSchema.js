const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
    itemName: {
        type:String,
        required: true
    },
    quantity: {
        type:Number,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    userId: {
        type:String,
    }
})
const Billings = new mongoose.model("billing", billingSchema)
module.exports = Billings