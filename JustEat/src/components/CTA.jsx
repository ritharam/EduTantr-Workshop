import React from "react";

export default function CTA() {
  return (
    <section className="cta-section text-center text-white py-5">
      <div className="container">
        <h2 className="fw-bold mb-3">Hungry? Get your meal delivered fast!</h2>
        <p className="mb-4">
          Order from your favorite restaurants with FoodieFlash today.
        </p>
        <button className="btn btn-light btn-lg text-danger fw-bold">
          Start Ordering
        </button>
      </div>
    </section>
  );
}
