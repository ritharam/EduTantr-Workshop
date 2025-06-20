import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import EnquiryForm from './EnquiryForm';
import './Header.css';

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar expand="lg" bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="#">
            <img src="../images/etholidays.png" alt="ET Holidays" height={45} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link className="nav-link" href="#tours">Tours</Nav.Link>
              <Nav.Link className="nav-link" href="#why-us">Why Us</Nav.Link>
              <Nav.Link className="nav-link" href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
            </Nav>
            <Button className="book-btn ms-lg-3" onClick={() => setShowForm(true)}>
              Book Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <EnquiryForm show={showForm} handleClose={() => setShowForm(false)} />
    </>
  );
};

export default Header;
