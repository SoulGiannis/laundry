import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Table } from 'react-bootstrap';

export default function Supplies() {
  const [supplies, setSupplies] = useState([]);
  const [supplyName, setSupplyName] = useState('');
  const [supplyDate, setSupplyDate] = useState('');
  const [supplyQuantity, setSupplyQuantity] = useState('');
  const [supplyPrice, setSupplyPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSupply = {
      supplyName,
      supplyDate,
      supplyQuantity,
      supplyPrice,
      totalCost: supplyQuantity * supplyPrice
    };
    setSupplies([...supplies, newSupply]);
    setSupplyName('');
    setSupplyDate('');
    setSupplyQuantity('');
    setSupplyPrice('');
  };

  const handleDelete = (index) => {
    const newSupplies = [...supplies];
    newSupplies.splice(index, 1);
    setSupplies(newSupplies);
  };

  const handleBack = () => {
    window.history.back();
  };
  
  return (
    <div className="container">
      <br />
    <div>
      <h4>Back to Dashboard</h4>
      <button onClick={handleBack} className="fa fa-backward btn btn-outline-primary ms-2 px-4 rounded-pill"></button>
    </div>
      <br />
    <h1 align='center'>Inventory Report</h1>
    <br />
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="supplyName">Supply Name:</label>
        <input type="text" className="form-control" id="supplyName" value={supplyName} onChange={(e) => setSupplyName(e.target.value)} placeholder="Enter supply name" required />
      </div>
      <div className="form-group">
        <label htmlFor="supplyDate">Date of Supplies:</label>
        <input type="date" className="form-control" id="supplyDate" value={supplyDate} onChange={(e) => setSupplyDate(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="supplyQuantity">Quantity (in kg):</label>
        <input type="number" className="form-control" id="supplyQuantity" value={supplyQuantity} onChange={(e) => setSupplyQuantity(e.target.value)} placeholder="Enter quantity in kg" required />
      </div>
      <div className="form-group">
        <label htmlFor="supplyPrice">Price per kg:</label>
        <input type="number" className="form-control" id="supplyPrice" value={supplyPrice} onChange={(e) => setSupplyPrice(e.target.value)} placeholder="Enter price per kg" required />
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
      <tbody>
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
      </tbody>
    </Table>
    <br />
    <br />
    <br />
  </div>
);
}
