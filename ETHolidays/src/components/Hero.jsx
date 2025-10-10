import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "./Hero.css";
import tour1 from "../assets/images/tour1.png";
import tour2 from "../assets/images/tour2.png";
import tour3 from "../assets/images/tour3.png";

const images = [tour1, tour2, tour3];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-container">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        <div className="overlay" />
        <Button
          variant="outline-light"
          onClick={goPrev}
          className="nav-btn left-btn"
        >
          &lsaquo;
        </Button>
        <Container className="text-center position-relative z-1">
          <h1 className="display-4 text-white">travel,world class</h1>
          <p className="text-white mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Button variant="light" size="lg" className="book-btn me-2">
            Get Started
          </Button>
        </Container>
        <Button
          variant="outline-light"
          onClick={goNext}
          className="nav-btn right-btn"
        >
          &rsaquo;
        </Button>
      </div>
    </div>
  );
};

export default Hero;
