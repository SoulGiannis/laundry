  import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { Table } from 'react-bootstrap';

export default function Order() {
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
console.log(currDate);

// 1 month after current date
  var newMonth = parseInt(month) + 1;
  if (newMonth < 10) {
    newMonth = '0' + newMonth;
  }
console.log(newMonth);

var oneMonthDate = year + '-' + newMonth + '-' + date;
console.log(oneMonthDate);

  

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
    const [order, setOrder] = useState([])
    //Handle Inputs
    const handleInput = (event)=>{
      let name = event.target.name;
      let value = event.target.value;

      setuser({...user, [name]:value})
  }
  useEffect(()=>{ getOrder()},[])
      //get details of user's orders
  const getOrder = () => {
    fetch("/getOrder", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setOrder(data.data);
      });
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
                          <label htmlFor="name">Name</label>
                          <input type="text" className="form-control" id="name" name="name" onChange={handleInput}  placeholder="Enter your name" required />
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="email" className="form-control" id="email" name="email" onChange={handleInput} placeholder="Enter your email" required />
                      </div>
                      <div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          <input type="tel" className="form-control" id="phone" name="phone" onChange={handleInput} pattern="[6-9]{1}[0-9]{9}"  placeholder="Enter your phone number" required />
                      </div>
                      <div className="form-group">
                          <label htmlFor="service">Service</label>
                          <select className="form-control" id="service" onChange={handleInput}  name="services">
                          <option>Wash and Fold</option>
                          <option>Wash and Iron</option>
                          <option>Dry Cleaning</option>
                          </select>
                      </div>
                      <div className="form-group">
                          <label htmlFor="weight">Weight</label>
                          <input type="number" className="form-control" id="weight" name="weight" onChange={handleInput}  placeholder="Enter the weight of your laundry in pounds" required />
                      </div>
                      <div className="form-group">
                          <label htmlFor="pickup-date">Pickup Date</label>
                          <input type="date" className="form-control" id="pickup-date" max={oneMonthDate} min={currDate} onChange={handleInput}  name="pickupDate" required/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="pickup-time">Pickup Time</label>
                          <input type="time" id="pickup-time" onChange={handleInput} min="10:00" max="18:00"  name="pickupTime" required/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="delivery-date">Delivery Date</label>
                          <input type="date" className="form-control" id="delivery-date" max={oneMonthDate} min={currDate} onChange={handleInput}  name="deliveryDate" required/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="delivery-time">Delivery Time</label>
                          <input type="time" id="delivery-time"  onChange={handleInput} min="10:00" max="18:00"  name="deliveryTime" required/>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit Request</button>
                      </form>
                  </div>
              </div>
          </div>
          <hr />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Services</th>
          <th>Weight</th>
          <th>PickupDate</th>
          <th>PickupTime</th>
          <th>DeliveryDate</th>
          <th>DeliveryTime</th>
        </tr>
      </thead>
      <tbody>
        {order.map((supply, index) => (
          <tr key={index}>
            <td>{supply.name}</td>
            <td>{supply.email}</td>
            <td>{supply.phone}</td>
            <td>{supply.services}</td>
            <td>{supply.weight}</td>
            <td>{supply.pickupDate}</td>
            <td>{supply.pickupTime}</td>
            <td>{supply.deliveryDate}</td>
            <td>{supply.deliveryTime}</td>
            {/* <td><button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button></td> */}
          </tr>
        ))}
      </tbody>
    </Table>

      </div>
    );
  }
