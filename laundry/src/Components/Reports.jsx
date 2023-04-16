import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Button,Table } from 'react-bootstrap';

export default function Reports() {
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
    date : "",
    machineId: "",
    totalLoads : "",
    totalWeight: "",
    totalCosts: ""
  });
const [report, setReport] = useState([])
  //Handle Inputs
  const handleInput = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    setuser({...user, [name]:value})
  }


    useEffect(() => { getReport() }, []);

    //get details of user's appointment
  const getReport = () => {
    fetch("/getReport", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setReport(data.data);
      });
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
        getReport();
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
      <NavLink className="navbar-brand fs-4 mx-auto fw-bolder text-center" to="/">Rajeshwari Laundry</NavLink>
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
           max={oneMonthDate} min={currDate}
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
      <Table className="item-list" striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Machine Id</th>
            <th>Total Loads</th>
            <th>Total Weight</th>
            <th>Total Costs</th>
          </tr>
        </thead>
        <tbody>
          {report.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.machineId}</td>
              <td>{item.totalLoads}</td>
              <td>{item.totalWeight} ₹</td>
              <td>{item.totalCosts} ₹</td>
            </tr>
          ))}
        </tbody>
        
      </Table>
        </>
);
};

