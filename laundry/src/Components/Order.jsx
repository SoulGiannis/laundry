  import React,{useState} from 'react'
  import { NavLink } from 'react-router-dom';
  export default function Order() {
      const [user, setuser] = useState({
      name : "",
      email: "",
      phone : "",
      services: "",
      weight:"",
      pickupDate: "",
      pickupTime: "",
      deliveryDate: "",
      deliveryTime: ""
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
      
      //Object Destrucring 
      //Store Object into Variables
      const { name,email,phone, services, weight, pickupDate, pickupTime, deliveryDate, deliveryTime } = user;
      try {
        //
        const res = await fetch('/order', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,email,phone, services, weight, pickupDate, pickupTime, deliveryDate, deliveryTime
          })
        })
        if (res.status === 400 || !res) {
          window.alert("Please try again");
        } else {
          window.alert("Details subbmited successfully");
          history.push('/order'); //history.pushState();
        }
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div>
          <div>
          <nav className="navbar navbar-expand-lg shadow">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
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
        <NavLink to="/dashboard" className="btn btn-outline-primary ms-auto px-4 rounded-pill" >
      <i className="fa fa-user-plus me-2"></i>Dashboard</NavLink>
      <NavLink to="/appointment" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
      <i className="fa fa-calendar me-2"></i>Appointment</NavLink>
      <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
      <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
      </div>
    </div>
  </nav>
      </div>
          <div className="container">
              <div className="row">
                  <div className="col-md-12 order-form">
                      <form onSubmit={handleSubmit} method="post" >
                      <h2>Laundry Services Order Form</h2>
                      <div className="form-group">
                          <label for="name">Name</label>
                          <input type="text" className="form-control" id="name" name="name" onChange={handleInput}  placeholder="Enter your name" required />
                      </div>
                      <div className="form-group">
                          <label for="email">Email</label>
                          <input type="email" className="form-control" id="email" name="email" onChange={handleInput} placeholder="Enter your email" required />
                      </div>
                      <div className="form-group">
                          <label for="phone">Phone</label>
                          <input type="tel" className="form-control" id="phone" name="phone" onChange={handleInput} pattern="[6-9]{1}[0-9]{9}"  placeholder="Enter your phone number" required />
                      </div>
                      <div className="form-group">
                          <label for="service">Service</label>
                          <select className="form-control" id="service" onChange={handleInput}  name="services">
                          <option>Wash and Fold</option>
                          <option>Wash and Iron</option>
                          <option>Dry Cleaning</option>
                          </select>
                      </div>
                      <div className="form-group">
                          <label for="weight">Weight</label>
                          <input type="number" className="form-control" id="weight" name="weight" onChange={handleInput}  placeholder="Enter the weight of your laundry in pounds" required />
                      </div>
                      <div className="form-group">
                          <label for="pickup-date">Pickup Date</label>
                          <input type="date" className="form-control" id="pickup-date" max="2023-05-30" min="2023-04-15" onChange={handleInput}  name="pickupDate" required/>
                      </div>
                      <div className="form-group">
                          <label for="pickup-time">Pickup Time</label>
                          <input type="time" className="form-contro l" id="pickup-time" onChange={handleInput}  name="pickupTime" required/>
                      </div>
                      <div className="form-group">
                          <label for="delivery-date">Delivery Date</label>
                          <input type="date" className="form-control" id="delivery-date" max="2023-05-30" min="2023-04-15" onChange={handleInput}  name="deliveryDate" required/>
                      </div>
                      <div className="form-group">
                          <label for="delivery-time">Delivery Time</label>
                          <input type="time" className="form-control" id="delivery-time" onChange={handleInput}  name="deliveryTime" required/>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit Request</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    );
  }
