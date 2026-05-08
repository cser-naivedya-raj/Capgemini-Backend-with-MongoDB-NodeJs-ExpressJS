// Import the Express framework
// Express framework import kar rahe hain
const express = require("express");

// Create a router instance
// Router ka instance create kar rahe hain
const router = express.Router();

// Sample data: array of users for demonstration
// Sample data: demonstration ke liye users ka array
let users = [
  { id: 1, name: "Gautam" },
  { id: 2, name: "Vijay" },
];

// GET route to retrieve a user by ID using req.params.id
// GET route - req.params.id use karke user ko retrieve karne ke liye
router.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// POST route to create a new user (though typically POST doesn't use :id, here for demonstration)
// POST route - naya user create karne ke liye (though usually POST :id use nahi karta, yahan demonstration ke liye)
router.post("/users/:id", (req, res) => {
  const newUser = { id: parseInt(req.params.id), ...req.body };
  users.push(newUser);
  res.status(201).json({
    message: "User created",
    user: newUser,
  });
});

// PUT route to update a user by ID
// PUT route - user ko ID se update karne ke liye
router.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = { id: userId, ...req.body };
    res.status(200).json({
      message: "User updated",
      user: users[userIndex],
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// PATCH route to partially update a user by ID
// PATCH route - user ko partially update karne ke liye by ID
router.patch("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.status(200).json({
      message: "User patched",
      user: users[userIndex],
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// DELETE route to delete a user by ID
// DELETE route - user ko ID se delete karne ke liye
router.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.status(200).json({
      message: "User deleted",
      user: deletedUser[0],
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Export the router
// Router ko export kar rahe hain
module.exports = router;
