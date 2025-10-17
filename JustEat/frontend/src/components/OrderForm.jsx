import React, { useState, useEffect } from "react";
import axios from "axios";

export default function OrderForm({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    foodItem: "",
    quantity: "",
  });

  const [menuItems, setMenuItems] = useState([]);

  // Fetch menu items when form opens
  useEffect(() => {
    if (show) {
      axios
        .get("http://localhost:5000/api/menu")
        .then((res) => setMenuItems(res.data))
        .catch((err) => console.error("Menu fetch error:", err));
    }
  }, [show]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/order", formData);
      alert("Order placed successfully!");
      onClose();
    } catch (error) {
      alert("Failed to place order. Please try again.");
      console.error(error);
    }
  };

  if (!show) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 1000,
        }}
      ></div>

      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          borderRadius: "10px",
          padding: "2rem",
          width: "400px",
          zIndex: 1001,
        }}
      >
        <h4 className="text-center text-danger fw-bold mb-3">
          Place Your Order
        </h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              name="address"
              className="form-control"
              required
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Select Food Item</label>
            <select
              name="foodItem"
              className="form-select"
              required
              onChange={handleChange}
            >
              <option value="">-- Choose an item --</option>
              {menuItems.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name} ({item.category})
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              name="quantity"
              className="form-control"
              required
              min="1"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Submit Order
          </button>
        </form>
      </div>
    </>
  );
}
