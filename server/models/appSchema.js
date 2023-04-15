// appointment.js
const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  phone: {
    type: Number,
    unique: true,
  },
  email: {  
    type: String,
    unique: true,
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
  }
});

const Appointments = mongoose.model("appointment", appSchema);
module.exports = Appointments;
