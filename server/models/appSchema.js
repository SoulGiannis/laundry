// appointment.js
const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {  
    type: String,
  },
  pickupDate: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  pickupAddress: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  additionalComment: {
    type: String,
  },
  userId: {
    type:String,
  },
});

const Appointments = mongoose.model("appointment", appSchema);
module.exports = Appointments;
