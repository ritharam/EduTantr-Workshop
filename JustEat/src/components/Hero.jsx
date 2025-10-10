import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

export default function Hero() {
  const heroStyle = {
    backgroundImage:
      "url('../images/bg1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "700px",
  };

  return (
    <header style={heroStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
          Fresh Food, Delivered Fast ⚡
        </h1>
        <p style={{ fontSize: "1.25rem", margin: "1rem 0" }}>
          Discover nearby restaurants, trending cuisines, and exclusive offers.
        </p>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for restaurants, dishes or cuisines"
            style={{ borderRadius: "0.5rem 0 0 0.5rem" }}
          />
          <Button
            variant="danger"
            style={{ borderRadius: "0 0.5rem 0.5rem 0" }}
          >
            Search
          </Button>
        </InputGroup>
        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>
          Popular : Pizza · Biryani · Desserts
        </p>
      </div>
    </header>
  );
}
