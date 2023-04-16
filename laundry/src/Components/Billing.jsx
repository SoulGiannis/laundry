import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';
import './style.css';
import axios from 'axios';

export default function Billing() {
  const [user, setuser] = useState({
    itemName : "",
    quantity: "",
    price : "",
  });
  const [items, setItems] = useState([]);
  //Handle Inputs
  const handleInput = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    setuser({...user, [name]:value})
  }

  useEffect(() => { getBilling() }, []);

    //get details of user's appointment
  const getBilling = () => {
    fetch("/getBilling", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setItems(data.data);
      });
  }

  //Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    //Object Destrucring 
    //Store Object into Variables
    const { itemName, quantity, price } = user;
    try {
      //
      const res = await fetch('/billing', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          itemName, quantity, price
        })
      })
      if (res.status === 400 || !res) {
        window.alert("Please try again");
      } else {
        window.alert("Details subbmited successfully");
      }
      getBilling(); 
    } catch (error) {
      console.log(error);
    }
  }
  var name;
  var quantity;
  var price;
  items.map((item) => {
    name = item.itemName;
    quantity = item.quantity;
    price = item.price;
    return price
  })
  //print bill function
  const handlePrint = async () => {
    const response = await axios.post('/invoice', {
      username: name,
      quantity: quantity,
      price: price,
      total: price,

    }, {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Rajeshwari-Laundry-Bill.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="bill-generator">
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
      <br />
      {/* <h4>Back to Dashboard</h4> */}
      {/* <button onClick={handleBack} className="fa fa-backward btn btn-outline-primary ms-2 px-4 rounded-pill"></button> */}
      <br />
      <h1 align='center'>Add Items</h1>
      <br />
      <Form onSubmit={handleSubmit} method="post">
        <Row>
          <Col>
            <Form.Group controlId="itemName">
              <Form.Label>Item Name:</Form.Label>
              <Form.Control type="text" name="itemName" minlength="2" maxlength="40" onChange={handleInput} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity (in kg):</Form.Label>
              <Form.Control type="number" name="quantity" onChange={handleInput} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="pricePerKg">
              <Form.Label>Price (₹):</Form.Label>
              <Form.Control type="number" name="price" onChange={handleInput} required />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit" className="mx-2 my-4">
              Add Item
            </Button>
          </Col>
        </Row>
        <br />
        <hr />
      </Form>
      <br />
      <br />
      <h1 align='center'>Rajeshwari Laundry</h1>
      <br />
      <Table className="item-list" striped bordered hover>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity (kg)</th>
            <th>Price (₹):</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <Button onClick={handlePrint} align='right' className='mx-2'>Print Bill</Button>
      {/* <Button variant="danger" type="reset" onClick={handleReset}>
        Reset
      </Button> */} 
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}