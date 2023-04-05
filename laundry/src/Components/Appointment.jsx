import React, { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Appointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [serviceType, setServiceType] = useState("Wash and Fold");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
  };

  return (
    <div class="container">
        <br />
        <br />
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h2 class="text-center">Laundry Pickup and Delivery Appointment Form</h2>
        <br />
        <form id="appointment-form" method="post">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" required />
            <br />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" class="form-control" id="phone" name="phone" placeholder="Enter your phone number" required />
            <br />
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" required />
            <br />
          </div>
          <div class="form-group">
            <label for="pickup-date">Pickup Date</label>
            <input type="date" class="form-control" id="pickup-date" name="pickup-date" required />
            <br />
          </div>
          <div class="form-group">
            <label for="delivery-date">Delivery Date</label>
            <input type="date" class="form-control" id="delivery-date" name="delivery-date" required />
            <br />
          </div>
          <div class="form-group">
            <label for="pickup-address">Pickup Address</label>
            <input type="text" class="form-control" id="pickup-address" name="pickup-address" placeholder="Enter your pickup address" required />
            <br />
          </div>
          <div class="form-group">
            <label for="delivery-address">Delivery Address</label>
            <input type="text" class="form-control" id="delivery-address" name="delivery-address" placeholder="Enter your delivery address" required />
            <br />
          </div>
          <div class="form-group">
            <label for="services">Select Services</label>
            <select class="form-control" id="services" name="services" required>
              <option value="wash">Wash</option>
              <option value="wash-fold">Wash and Fold</option>
              <option value="dry-cleaning">Dry Cleaning</option>
              <option value="ironing">Ironing</option>
            </select>
            <br />
          </div>
          <div class="form-group">
            <label for="additional-comments">Additional Comments</label>
            <textarea class="form-control" id="additional-comments" name="additional-comments" rows="3"></textarea>
            <br />
          </div>
          <button type="submit" class="btn btn-outline-primary">Submit Request</button>
        </form>
        <br />
      </div>
    </div>
  </div>  
);
}
