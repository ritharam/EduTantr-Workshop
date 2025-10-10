import React from "react";
import { Card } from "react-bootstrap";

const features = [
  {
    title: "Fast Delivery",
    desc: "Get your food delivered in under 30 minutes.",
    icon: "🚀",
  },
  {
    title: "Top Restaurants",
    desc: "Handpicked, quality restaurants near you.",
    icon: "🍽️",
  },
  {
    title: "Exclusive Offers",
    desc: "Enjoy discounts and cashback every day.",
    icon: "💰",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      style={{
        padding: "5rem 0",
        backgroundColor: "#fff8f5",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h2 style={{ marginBottom: "3rem", fontWeight: "700" }}>
          Why Choose FoodieFlash?
        </h2>
        <div className="row justify-content-center g-4">
          {features.map((feature, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <Card
                className="h-100 shadow-sm border-0"
                style={{ borderRadius: "1rem", padding: "2rem" }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  {feature.icon}
                </div>
                <Card.Body>
                  <Card.Title style={{ fontWeight: "600" }}>
                    {feature.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#6c757d" }}>
                    {feature.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
