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
  const timeStamp = new Date().toISOString();
  console.log(`[${timeStamp}] ${req.method} ${req.url}`);
  next(); // Move to the next middleware/route
});

/*
    SERVING STATIC FILES
*/
// This code tells Express to serve static files from the 'public' directory.
app.use(express.static("public"));

/*
    PARSING JSON DATA
*/
app.use(express.json()); // Middleware to parse JSON bodies

app.post("/data", (req, res) => {
  // When data is posted to /data, this route will handle it
  const receivedData = req.body;
  console.log("Received Data:", receivedData);
  res.json({ message: "Data received successfully!", data: receivedData });
});

/*
    ERROR HANDLING
*/

// 404 Not Found Middleware
app.use((req, res) => {
  res.status(404).send("Page Not Found ❌");
});

// Starting Server
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});