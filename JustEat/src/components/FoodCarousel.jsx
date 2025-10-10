import React from "react";
import { Card } from "react-bootstrap";
import "./FoodCarousel.css"; // import the CSS file

const categories = [
  {
    title: "Pizza",
    desc: "Hot and cheesy delights",
    img: "../images/pizza.avif",
  },
  {
    title: "Biryani",
    desc: "Aromatic rice dishes",
    img: "../images/briyani.jpg",
  },
  {
    title: "Sushi",
    desc: "Fresh Japanese rolls",
    img: "../images/sushi.jpeg",
  },
  {
    title: "Desserts",
    desc: "Sweet indulgence",
    img: "../images/dessert.jpg",
  },
  {
    title: "Burgers",
    desc: "Juicy & irresistible",
    img: "../images/burger.jpg",
  },
  {
    title: "Pasta",
    desc: "Italian favorites",
    img: "../images/pasta.jpeg",
  },
];

export default function FoodCarousel() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          🍴 Explore by Category
        </h2>

        {/* Scrollable carousel */}
        <div className="carousel-scroll d-flex flex-nowrap overflow-auto pb-3">
          {categories.map((cat, index) => (
            <Card
              key={index}
              className="mx-2 flex-shrink-0"
              style={{ width: "18rem", minWidth: "18rem" }}
            >
              <Card.Img
                variant="top"
                src={cat.img}
                alt={cat.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{cat.title}</Card.Title>
                <Card.Text className="text-muted small mb-0">
                  {cat.desc}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
