import React, { useState } from 'react';
import { Modal, Button, Form} from 'react-bootstrap';

const EnquiryForm = ({ show, handleClose }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton style={{ backgroundColor: '#ffc107' }}>
        <Modal.Title className="mx-auto">ENQUIRE NOW</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Control className="mb-3" placeholder="Name *" required />
          <Form.Control className="mb-3" placeholder="Phone Number *" required />
          <Form.Control type="email" className="mb-3" placeholder="Email *" required />
          <Form.Control className="mb-3" placeholder="Travel Destination *" required />
          <Form.Control type="date" className="mb-3" placeholder="Date of Travel *" required />
          <Form.Control className="mb-3" placeholder="No. of People *" required />
          <Form.Control className="mb-3" placeholder="Vacation Type *" required />
          <Button type="submit" className="w-100 book-btn" >
            SUBMIT
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EnquiryForm;
