import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Table } from 'react-bootstrap';

export default function Supplies() {

  const [user, setuser] = useState({
    supplyName : "",
    dateofSupply: "",
    quantity : "",
    price: ""
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
    const { supplyName, dateofSupply,quantity, price } = user;
    try {
      //
      const res = await fetch('/inventory', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          supplyName, dateofSupply,quantity, price  
        })
      })
      if (res.status === 400 || !res) {
        window.alert("Please try again");
      } else {
        window.alert("Details subbmited successfully");
        history.push('/inventory'); //history.pushState();
      }
    } catch (error) {
      console.log(error);
    }
  }
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
      <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill" >
    <i className="fa fa-user-plus me-2"></i>Dashboard</NavLink>
    <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
    <NavLink to="/appointment" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-calendar me-2"></i>Appointment</NavLink>
    </div>
  </div>
</nav>
    </div>
      <br />
    <div>
      <h4>Back to Dashboard</h4>
      {/* <button onClick={handleBack} className="fa fa-backward btn btn-outline-primary ms-2 px-4 rounded-pill"></button> */}
    </div>
      <br />
    <h1 align='center'>Inventory Report</h1>
    <br />
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="supplyName">Supply Name:</label>
        <input type="text" className="form-control" id="supplyName" name="supplyName" onChange={handleInput} placeholder="Enter supply name" required />
      </div>
      <div className="form-group">
        <label htmlFor="supplyDate">Date of Supplies:</label>
        <input type="date" className="form-control" id="supplyDate" name="dateofSupply" onChange={handleInput} required />
      </div>
      <div className="form-group">
        <label htmlFor="supplyQuantity">Quantity (in kg):</label>
        <input type="number" className="form-control" id="supplyQuantity" name="quantity" onChange={handleInput} placeholder="Enter quantity in kg" required />
      </div>
      <div className="form-group">
        <label htmlFor="supplyPrice">Price per kg:</label>
        <input type="number" className="form-control" id="supplyPrice" name="price" onChange={handleInput}  placeholder="Enter price per kg" required />
      </div>
      <br />
      <button type="submit" className="btn btn-primary">Add Supply</button>
    </form>
    <hr />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Supply Name</th>
          <th>Date of Supplies</th>
          <th>Quantity (in kg)</th>
          <th>Price per kg</th>
          <th>Total Cost (₹)</th>
          <th>Action</th>
        </tr>
      </thead>
      {/* <tbody>
        {supplies.map((supply, index) => (
          <tr key={index}>
            <td>{supply.supplyName}</td>
            <td>{supply.supplyDate}</td>
            <td>{supply.supplyQuantity}</td>
            <td>{supply.supplyPrice}</td>
            <td>{supply.totalCost}</td>
            <td><button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button></td>
          </tr>
        ))}
      </tbody> */}
    </Table>
    <br />
    <br />
    <br />
  </div>
);
}
