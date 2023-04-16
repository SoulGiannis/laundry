const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    date: {
        type:Date,
        required: true
    },
    machineId: {
        type:Number,
        required: true
    },
    totalLoads: {
        type:Number,
        required: true
    },
    totalWeight: {
        type:Number,
        required: true
    },
    totalCosts: {
        type:Number,
        required: true
    },
    userId: {
        type:String,
    },
})
const Reports = new mongoose.model("report", reportSchema)
module.exports = Reports