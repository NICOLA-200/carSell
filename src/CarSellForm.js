import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const CarSellForm = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    features: [],
    transmission: '',
    priceRange: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? (checked ? [...formData[name], value] : formData[name].filter(item => item !== value)) : value;

    setFormData(prevData => ({
      ...prevData,
      [name]: newValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    
<Form onSubmit={handleSubmit} style={{ position: 'absolute',width: "70%" ,height:"60%", margin: "10% 10%",display:"flex",flexDirection:"row",flexWrap:"wrap", padding: "30px",lineHeight:"30px",backgroundColor:"white" }}>
      <Form.Group as={Row} controlId="make">
        <Form.Label column sm={2}>Car Make:</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name="make" value={formData.make} onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="model">
        <Form.Label column sm={2}>Car Model:</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name="model" value={formData.model} onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="year">
        <Form.Label column sm={2}>Year:</Form.Label>
        <Col sm={10}>
          <Form.Control type="date" name="year" value={formData.year} onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="mileage">
        <Form.Label column sm={2}>Mileage:</Form.Label>
        <Col sm={10}>
          <Form.Control type="number" name="mileage" value={formData.mileage} onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="condition">
        <Form.Label column sm={2}>Condition:</Form.Label>
        <Col sm={10}>
          <Form.Check type="radio" id="excellent" name="condition" value="Excellent" label="Excellent" onChange={handleChange} required />
          <Form.Check type="radio" id="good" name="condition" value="Good" label="Good" onChange={handleChange} required />
          <Form.Check type="radio" id="fair" name="condition" value="Fair" label="Fair" onChange={handleChange} required />
          <Form.Check type="radio" id="poor" name="condition" value="Poor" label="Poor" onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="features">
        <Form.Label column sm={2}>Features:</Form.Label>
        <Col sm={10}>
          <Form.Check type="checkbox" id="ac" name="features" value="Air Conditioning" label="Air Conditioning" onChange={handleChange} />
          <Form.Check type="checkbox" id="ps" name="features" value="Power Steering" label="Power Steering" onChange={handleChange} />
          <Form.Check type="checkbox" id="pw" name="features" value="Power Windows" label="Power Windows" onChange={handleChange} />
          <Form.Check type="checkbox" id="abs" name="features" value="ABS" label="ABS" onChange={handleChange} />
          <Form.Check type="checkbox" id="nav" name="features" value="Navigation System" label="Navigation System" onChange={handleChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="transmission">
        <Form.Label column sm={2}>Transmission:</Form.Label>
        <Col sm={10}>
          <Form.Control as="select" name="transmission" value={formData.transmission} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="priceRange">
        <Form.Label column sm={2}>Price Range:</Form.Label>
        <Col sm={10}>
          <Form.Control type="range" name="priceRange" min="0" max="100" value={formData.priceRange} onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="contactNumber">
        <Form.Label column sm={2}>Contact Number:</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default CarSellForm;
