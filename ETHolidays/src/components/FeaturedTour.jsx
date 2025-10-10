import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const tours = [
  {
    title: "Beach Paradise",
    desc: "Sunsets & relaxation",
    img: "../images/beach.png",
  },
  {
    title: "Mountain Escape",
    desc: "Hiking & serenity",
    img: "../images/mountain.png",
  },
  {
    title: "City Lights",
    desc: "Culture & nightlife",
    img: "../images/citylights.png",
  },
];

const FeaturedTour = () => {
  return (
    <Container id="tours" className="py-5">
      <h2 className="text-canter mb-4">Our Packages</h2>
      <Row>
        {tours.map((t, i) => (
          <Col md={4} key={i} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={t.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{t.title}</Card.Title>
                <Card.Text>{t.desc}</Card.Text>
                <Button className="mt-auto book-btn">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedTour;
