// Import the Express framework
// Express framework import kar rahe hain
const express = require("express");

// Create an Express application instance
// Express application ka instance create kar rahe hain
const app = express();

// Middleware to parse JSON bodies in requests
// Requests mein JSON bodies parse karne ke liye middleware
app.use(express.json());

// Import the routes from the routings.js file
// routings.js file se routes import kar rahe hain
const routes = require("./routings.js");

// Use the imported routes for the root path "/"
// Imported routes ko root path "/" ke liye use kar rahe hain
app.use("/", routes);

// Start the server and listen on port 3000
// Server start karo aur port 3000 pe listen karo
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
