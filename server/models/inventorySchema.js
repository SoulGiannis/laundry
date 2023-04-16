const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    supplyName: {
        type:String,
        required: true
    },
    dateofSupply: {
        type:Date,
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
    user: {
        type:String,
    },
    userId: {   
        type:String,
    }
})
const Inventorys = new mongoose.model("inventory", inventorySchema)
module.exports = Inventorys