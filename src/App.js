// src/App.js
import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component for rendering the product card
const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={product.imageURL} />
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const App = () => {
  const [product, setProduct] = useState(null);
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    imageURL: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProduct(form);
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product price"
            name="price"
            value={form.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formImageURL">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            name="imageURL"
            value={form.imageURL}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Product
        </Button>
      </Form>
      <div className="mt-4">
        <ProductCard product={product} />
      </div>
    </Container>
  );
};

export default App;
