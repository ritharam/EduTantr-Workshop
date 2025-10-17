const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",  
  password: "1234", 
  database: "justeat",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected!");
});

db.query(`
  CREATE TABLE IF NOT EXISTS menu_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL
  )
`);

db.query(`
  CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    address TEXT,
    foodItem VARCHAR(100),
    quantity INT,
    order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

db.query("SELECT COUNT(*) AS count FROM menu_items", (err, result) => {
  if (result[0].count === 0) {
    const items = [
      ["Margherita Pizza", "Italian"],
      ["Paneer Biryani", "Indian"],
      ["Chicken Burger", "Fast Food"],
      ["Chocolate Cake", "Dessert"],
      ["California Sushi Roll", "Japanese"],
    ];
    db.query("INSERT INTO menu_items (name, category) VALUES ?", [items]);
    console.log("Default menu items added.");
  }
});

app.get("/api/menu", (req, res) => {
  db.query("SELECT * FROM menu_items", (err, results) => {
    if (err) return res.status(500).json({ error: "DB fetch failed" });
    res.json(results);
  });
});

app.post("/api/order", (req, res) => {
  const { name, email, address, foodItem, quantity } = req.body;

  const sql =
    "INSERT INTO orders (name, email, address, foodItem, quantity) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, email, address, foodItem, quantity], (err) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json({ message: "Order placed successfully" });
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
