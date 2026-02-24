import express from "express";
import dotenv from "dotenv"; // Always remember to import dotenv before using it
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Implementing Basic Route
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

/*
    ROUTING
*/

// GET Routes
app.get("/about", (req, res) => {
  res.send("About Page📃");
});

// POST Routes
app.post("/submit", (req, res) => {
  res.send("Form Submitted✅");
});

/*
    MIDDLEWARE
*/

// Simple Logger Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString}] ${req.method} ${req.url}`);
  next(); // Move to the next middleware/route
});

// Starting Server
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
