const express = require("express");

const router = express.Router();

// Define routes for user operations
// User operations ke liye routes define kar rahe hain

// GET route to retrieve a user by ID
// GET route - user ko ID se retrieve karne ke liye
router.get("/users/:id", (req, res) => {
  res.send(`GET user ${req.params.id}`);
});

// POST route to create or update a user by ID
// POST route - user ko create ya update karne ke liye by ID
router.post("/users/:id", (req, res) => {
  res.send(`POST user ${req.params.id}`);
});

// PUT route to update a user by ID
// PUT route - user ko update karne ke liye by ID
router.put("/users/:id", (req, res) => {
  res.send(`PUT user ${req.params.id}`);
});

// PATCH route to partially update a user by ID
// PATCH route - user ko partially update karne ke liye by ID
router.patch("/users/:id", (req, res) => {
  res.send(`PATCH user ${req.params.id}`);
});

// DELETE route to delete a user by ID
// DELETE route - user ko delete karne ke liye by ID
router.delete("/users/:id", (req, res) => {
  res.send(`DELETE user ${req.params.id}`);
});

module.exports = router;
