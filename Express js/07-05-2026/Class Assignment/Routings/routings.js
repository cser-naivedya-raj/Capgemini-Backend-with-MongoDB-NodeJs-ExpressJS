// Import the Express framework
// Express framework import kar rahe hain
const express = require("express");

// Create an Express application instance
// Express application ka instance create kar rahe hain
const app = express();

// Middleware to parse JSON bodies in requests
// Requests mein JSON bodies parse karne ke liye middleware
app.use(express.json());

// Sample data: array of users
// Sample data: users ka array
let users = [
  { id: 1, name: "Naivedya" },
  { id: 2, name: "Prachi" },
];

// Home page route
// Home page route
app.get("/", (req, res) => {
  res.send("<h1>Hiii</h1>");
});

// GET route to retrieve all users
// GET route - sare users retrieve karne ke liye
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// POST route to add a new user
// POST route - naya user add karne ke liye
app.post("/users", (req, res) => {
  users.push(req.body);

  res.status(201).json({
    message: "User added",
    users,
  });
});

// PUT route to update a user (full update)
// PUT route - user ko update karne ke liye (full update)
// Uses ternary operator and map to update the user with matching id
// Ternary operator aur map use karta hai matching id wale user ko update karne ke liye
app.put("/users", (req, res) => {
  users = users.map((user) =>
    user.id === req.body.id ? { ...user, ...req.body } : user,
  );

  res.status(200).json({
    message: "User updated",
    users,
  });
});

// PATCH route to partially update a user
// PATCH route - user ko partially update karne ke liye
// Uses ternary operator and map to update the user with matching id
// Ternary operator aur map use karta hai matching id wale user ko update karne ke liye
app.patch("/users", (req, res) => {
  users = users.map((user) =>
    user.id === req.body.id ? { ...user, ...req.body } : user,
  );

  res.status(200).json({
    message: "User patched",
    users,
  });
});

// DELETE route to remove a user
// DELETE route - user ko remove karne ke liye
// Uses ternary operator and filter to remove the user with matching id
// Ternary operator aur filter use karta hai matching id wale user ko remove karne ke liye
app.delete("/users", (req, res) => {
  users = users.filter((user) => (user.id === req.body.id ? false : true));

  res.status(200).json({
    message: "User deleted",
    users,
  });
});

// Start the server and listen on port 3000
// Server start karo aur port 3000 pe listen karo
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
