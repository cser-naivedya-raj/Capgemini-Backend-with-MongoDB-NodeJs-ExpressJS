// Import the Express framework
// Express framework import kar rahe hain
const express = require("express");

// Create an Express application instance
// Express application ka instance create kar rahe hain
const app = express();

// Define the port number for the server
// Server ke liye port number define kar rahe hain
const port = 3000;

// Route for the home page - sends a simple text response
// Home page ke liye route - simple text response bhejta hai
app.get("/", (req, res) => {
  res.send("Server is live!");
});

// Route to send an HTML response
// HTML response bhejne ke liye route
app.get("/html", (req, res) => {
  res.send("<h1>Welcome to the HTML page!</h1>");
});

// Route to send a JSON response
// JSON response bhejne ke liye route
app.get("/json", (req, res) => {
  res.json({
    message: "This is a JSON response",
  });
});

// Route to send an array as JSON
// Array ko JSON mein bhejne ke liye route
app.get("/array", (req, res) => {
  res.json([1, 2, 3, 4, 5]);
});

// Start the server and listen on the specified port
// Server start karo aur specified port pe listen karo
app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server is running on http://localhost:${port}`);
});
