import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Appointment() {

//for current date in form today's date
const d = new Date();
var date = d.getDate() + 1;
var month = d.getMonth() + 1;
var year = d.getUTCFullYear();

if (date < 10) {
  date = '0' + date;
}

if (month < 10) {
  month = '0' + month;
}

var currDate = year + '-' + month + '-' + date;

// 1 month after current date
  var newMonth = parseInt(month) + 1;
  if (newMonth < 10) {
    newMonth = '0' + newMonth;
  }

var oneMonthDate = year + '-' + newMonth + '-' + date;  

const [user, setuser] = useState({
    name : "",
    phone: "",
    email : "",
    pickupDate: "",
    deliveryDate: "",
    pickupAddress: "",
    deliveryAddress: "",
    service: "",
    additionalComment:""
  });

  //Handle Inputs
  const handleInput = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    setuser({...user, [name]:value})
  }
//Handle Submit
const handleSubmit = async (event) => {
  event.preventDefault();
  
  //Object Destructuring 
  //Store Object into Variables
  const { name, phone, email, pickupDate, deliveryDate, pickupAddress, deliveryAddress, service, additionalComment } = user;
  
  try {
    const res = await fetch('/appointment', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        pickupDate,
        deliveryDate,
        pickupAddress,
        deliveryAddress,
        service,
        additionalComment
      })
    });

    const data = await res.json();

    if (data.status === "error") {
      window.alert("Please try again");
    } else {
      window.alert("Details submitted successfully");
    }
  } catch (error) {
    console.log("catch block");
  }
};

  

  return (
    <div className="container">
          <div>
        <nav className="navbar navbar-expand-lg shadow">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact US</NavLink>
        </li>
      </ul>
      <NavLink className="navbar-brand fs-4 mx-auto fw-bolder text-center" to="/">Rajeshwari Laundry</NavLink>
    <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
    </div>
  </div>
</nav>
    </div>
        <br />
        <br />
    <div className="row">
      <div className="col-md-6 mx-auto">
        <h2 className="text-center">Laundry Pickup and Delivery Appointment Form</h2>
        <br />
        <form id="appointment-form" onSubmit={handleSubmit} method="post">
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={handleInput} minlength="2" maxlength="40" placeholder="Enter your name" required />
            <br />
          </div>
          <div className="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" className="form-control" id="phone" name="phone" onChange={handleInput} pattern="[6-9]{1}[0-9]{9}" placeholder="Enter your phone number" required />
            <br />
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email"  onChange={handleInput} placeholder="Enter your email" required />
            <br />
          </div>
          <div className="form-group">
            <label for="pickup-date">Pickup Date</label>
            <input type="date" className="form-control" id="pickup-date" name="pickupDate" max={oneMonthDate}  min={currDate}  onChange={handleInput}  required />
            <br />
          </div>
          <div className="form-group">
            <label for="delivery-date">Delivery Date</label>
            <input type="date" className="form-control" id="delivery-date" name="deliveryDate" max={oneMonthDate} min={currDate} onChange={handleInput} required />
            <br />
          </div>
          <div className="form-group">
            <label for="pickup-address">Pickup Address</label>
            <input type="text" className="form-control" id="pickup-address" name="pickupAddress" minlength="20" maxlength="50" onChange={handleInput} placeholder="Enter your pickup address" required />
            <br />
          </div>
          <div className="form-group">
            <label for="delivery-address">Delivery Address</label>
            <input type="text" className="form-control" id="delivery-address" name="deliveryAddress" minlength="20" maxlength="40" onChange={handleInput} placeholder="Enter your delivery address" required />
            <br />
          </div>
          <div className="form-group">
            <label for="services">Select Services</label>
            <select className="form-control" id="services" onChange={handleInput} name="service" required>
              <option value="wash">Wash</option>
              <option value="wash-fold">Wash and Fold</option>
              <option value="dry-cleaning">Dry Cleaning</option>
              <option value="ironing">Ironing</option>
            </select>
            <br />
          </div>
          <div className="form-group">
            <label for="additional-comments">Additional Comments</label>
            <textarea className="form-control" id="additional-comments" name="additionalComment" minlength="5" maxlength="100" onChange={handleInput} rows="3"></textarea>
            <br />
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit Request</button>
        </form>
        <br />
      </div>
    </div>
  </div>  
);
}
