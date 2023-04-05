import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';
import './style.css';

export default function Billing() {
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleAddItem = (event) => {
    event.preventDefault();
    const { itemName, quantity, pricePerKg } = event.target.elements;
    const item = {
      itemName: itemName.value,
      quantity: parseInt(quantity.value),
      pricePerKg: parseInt(pricePerKg.value),
      totalCost: parseInt(quantity.value) * parseInt(pricePerKg.value)
    };
    setItems([...items, item]);
    setTotalCost(totalCost + item.totalCost);
    event.target.reset();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setItems([]);
    setTotalCost(0);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <Container className="bill-generator">
      <br />
      <h4>Back to Dashboard</h4>
      <button onClick={handleBack} className="fa fa-backward btn btn-outline-primary ms-2 px-4 rounded-pill"></button>
      <br />
      <h1 align='center'>Add Items</h1>
      <br />
      <Form onSubmit={handleAddItem}>
        <Row>
          <Col>
            <Form.Group controlId="itemName">
              <Form.Label>Item Name:</Form.Label>
              <Form.Control type="text" name="itemName" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity (in kg):</Form.Label>
              <Form.Control type="number" name="quantity" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="pricePerKg">
              <Form.Label>Price (₹):</Form.Label>
              <Form.Control type="number" name="pricePerKg" required />
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
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.pricePerKg}</td>
              <td>{item.totalCost} ₹</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total Cost:</td>
            <td>{totalCost} ₹</td>
          </tr>
        </tfoot>
      </Table>
      <br />
      <Button onClick={handlePrint} align='right' className='mx-2'>Print Bill</Button>
      <Button variant="danger" type="reset" onClick={handleReset}>
        Reset
      </Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}