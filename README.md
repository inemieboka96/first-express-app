
# First Express App

This project is a simple, modern Express.js tutorial application. It demonstrates the basics of building a web server using Express, serving static files, and creating visually appealing web pages.

## What is Express.js?
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It makes it easy to handle HTTP requests, routing, middleware, and more.

## Project Structure
- `app.js`: The main application file. Sets up the Express server, routes, middleware, and static file serving.
- `.env`: Stores environment variables (like PORT).
- `package.json`: Project metadata, dependencies, and scripts.
- `public/index.html`: Modern, animated home page served as a static file.
- `public/about.html`: Modern, animated about page served as a static file.

## How It Works
- The server listens on a port specified in the `.env` file (default is 4000 if not set).
- GET routes (`/`, `/about`) are handled by serving static HTML files from the `public` folder.
- Middleware is used for logging requests.
- POST routes (like `/submit`) can be tested using tools like Postman or by adding forms to your HTML.

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set the PORT in `.env` (optional):**
   ```env
   PORT=3000
   ```
3. **Start the server:**
   ```bash
   npm start
   ```
4. **Visit your app:**
   Open your browser and go to `http://localhost:6000` (or the port you set).

## Key Features
- **Modern UI:** The home and about pages use modern CSS, emojis, and animations for a fun look.
- **Routing:** Define endpoints for your app (e.g., `/`, `/about`, `/submit`).
- **Middleware:** Functions that run before your route handlers (e.g., logging, parsing JSON).
- **Static Files:** All files in the `public` folder are served automatically.
- **Environment Variables:** Use `.env` to configure settings like the port.

## Example Route
```js
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
```

## Example: Adding a POST Form
To test POST routes in your browser, add a form to `index.html`:
```html
<form action="/submit" method="POST">
  <input type="text" name="message" placeholder="Type something...">
  <button type="submit">Send</button>
</form>
```

## Why Use Express?
- Easy to set up and use
- Handles routing, middleware, and static files
- Widely used and well-documented

## Learn More
- [Express.js Documentation](https://expressjs.com/)

---
This project is for learning purposes and demonstrates the basics of Express.js, static file serving, and modern web design. Feel free to experiment and add your own routes, middleware, or HTML pages!
