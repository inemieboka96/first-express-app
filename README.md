# First Express App

This project is a simple Express.js tutorial application. It demonstrates the basics of building a web server using Express, a popular Node.js framework.

## What is Express.js?
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It makes it easy to handle HTTP requests, routing, middleware, and more.

## Project Structure
- `app.js`: The main application file. Sets up the Express server and routes.
- `.env`: Stores environment variables (like PORT).
- `package.json`: Project metadata and dependencies.

## How It Works
- The server listens on a port specified in the `.env` file (default is 4000 if not set).
- You can define routes to handle different HTTP requests (GET, POST, etc.).
- Middleware can be used to process requests and responses.

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set the PORT in `.env` (optional):**
   ```env
   PORT=6000
   ```
3. **Start the server:**
   ```bash
   npm start
   ```
4. **Visit your app:**
   Open your browser and go to `http://localhost:6000` (or the port you set).

## Key Concepts
- **Routing:** Define endpoints for your app (e.g., `/`, `/about`).
- **Middleware:** Functions that run before your route handlers (e.g., logging, parsing JSON).
- **Environment Variables:** Use `.env` to configure settings like the port.

## Example Route
```js
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
```

## Why Use Express?
- Easy to set up and use
- Handles routing and middleware
- Widely used and well-documented

## Learn More
- [Express.js Documentation](https://expressjs.com/)

---
This project is for learning purposes and demonstrates the basics of Express.js. Feel free to experiment and add your own routes or middleware!
