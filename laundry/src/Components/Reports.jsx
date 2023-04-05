import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

export default function Reports() {
    const [reportData, setReportData] = useState({
        date: '',
        machineId: '',
        totalLoads: '',
        totalWeight: '',
        totalCost: ''
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setReportData({ ...reportData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(reportData);
        // TODO: Handle form submission logic here
      };

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formDate">
      <Form.Label>Date</Form.Label>
      <Form.Control
        type="date"
        name="date"
        value={reportData.date}
        onChange={handleInputChange}
        required
      />
    </Form.Group>

    <Form.Group controlId="formMachineId">
      <Form.Label>Machine ID</Form.Label>
      <Form.Control
        type="text"
        name="machineId"
        value={reportData.machineId}
        onChange={handleInputChange}
        required
      />
    </Form.Group>

    <Form.Group controlId="formTotalLoads">
      <Form.Label>Total Loads</Form.Label>
      <Form.Control
        type="number"
        name="totalLoads"
        value={reportData.totalLoads}
        onChange={handleInputChange}
        required
      />
    </Form.Group>

    <Form.Group controlId="formTotalWeight">
      <Form.Label>Total Weight</Form.Label>
      <Form.Control
        type="number"
        name="totalWeight"
        value={reportData.totalWeight}
        onChange={handleInputChange}
        required
      />
    </Form.Group>

    <Form.Group controlId="formTotalCost">
      <Form.Label>Total Cost</Form.Label>
      <Form.Control
        type="number"
        name="totalCost"
        value={reportData.totalCost}
        onChange={handleInputChange}
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
);
};

