import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

export default function Reports() {
const [user, setuser] = useState({
    date : "",
    machineId: "",
    totalLoads : "",
    totalWeight: "",
    totalCosts: ""
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
    const { date, machineId, totalLoads, totalWeight, totalCosts } = user;
    try {
      //
      const res = await fetch('/report', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date, machineId, totalLoads, totalWeight, totalCosts 
        })
      })
      if (res.status === 400 || !res) {
        window.alert("Please try again");
      } else {
        window.alert("Details subbmited successfully");
        history.push('/report'); //history.pushState();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
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
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formDate">
      <Form.Label>Date</Form.Label>
      <Form.Control
        type="date"
        name="date"
        // value={reportData.date}
        onChange={handleInput}
        required
        />
    </Form.Group>

    <Form.Group controlId="formMachineId">
      <Form.Label>Machine ID</Form.Label>
      <Form.Control
        type="text"
        name="machineId"
        // value={reportData.machineId}
        onChange={handleInput}
        required
      />
    </Form.Group>

    <Form.Group controlId="formTotalLoads">
      <Form.Label>Total Loads</Form.Label>
      <Form.Control
        type="number"
        name="totalLoads"
        // value={reportData.totalLoads}
        onChange={handleInput}
        required
        />
    </Form.Group>

    <Form.Group controlId="formTotalWeight">
      <Form.Label>Total Weight</Form.Label>
      <Form.Control
        type="number"
        name="totalWeight"
        // value={reportData.totalWeight}
        onChange={handleInput}
        required
        />
    </Form.Group>

    <Form.Group controlId="formTotalCost">
      <Form.Label>Total Cost</Form.Label>
      <Form.Control
        type="number"
        name="totalCosts"
        // value={reportData.totalCost}
        onChange={handleInput}
        required
        />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </Form>
        </>
);
};

