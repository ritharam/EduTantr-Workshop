import React, { useState } from "react";
import OrderForm from "./OrderForm";

export default function CTA() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(135deg, #da3041ff, #ea4b5bff)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Hungry? Get your meal delivered fast!</h2>
          <p className="mb-4">
            Order from your favorite restaurants with FoodieFlash today.
          </p>
          <button
            className="btn btn-light btn-lg text-danger fw-bold"
            onClick={() => setShowForm(true)}
          >
            Start Ordering
          </button>
        </div>
      </section>

      <OrderForm show={showForm} onClose={() => setShowForm(false)} />
    </>
  );
}
