import express from "express";
import dotenv from "dotenv"; // Always remember to import dotenv before using it
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Implementing Basic Route
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

// Starting Server

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
