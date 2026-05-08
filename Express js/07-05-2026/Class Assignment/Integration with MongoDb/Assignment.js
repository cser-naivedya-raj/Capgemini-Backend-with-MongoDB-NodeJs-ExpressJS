// Import required modules
// Required modules import kar rahe hain
const express = require("express");
const mongodb = require("mongodb").MongoClient;
const path = require("path");

// Create Express application
// Express application create kar rahe hain
const app = express();

// MongoDB connection URL
// MongoDB connection URL
let url = "mongodb://127.0.0.1:27017";
let db;

// Function to connect to MongoDB and create database/collection
// MongoDB se connect karne aur database/collection create karne ka function
let connectDb = async () => {
  let client = await mongodb.connect(url);
  db = await client.db("jecrc");
  console.log("jecrc db connected successfully");
  await db.createCollection("users");
};

// Connect to the database
// Database se connect karo
connectDb();

// Middleware to parse JSON and URL-encoded request bodies
// JSON aur URL-encoded request bodies parse karne ke liye middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
// Home route
app.get("/", (req, res) => {
  res.send("<h1>Express With MongoDB</h1>");
});

// Route to serve the registration form
// Registration form serve karne ke liye route
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

// Route to handle user registration (POST)
// User registration handle karne ke liye route (POST)
app.post("/register", async (req, res) => {
  let data = req.body;
  console.log(data);

  // Insert user data into MongoDB
  // User data ko MongoDB mein insert karo
  await db.collection("users").insertOne(data);

  res.status(200).send({
    message: "User Registered Successfully",
    data,
  });
});

// Route to get all users (JSON format)
// Sare users get karne ke liye route (JSON format mein)
app.get("/users", async (req, res) => {
  let users = await db.collection("users").find().toArray();
  res.send(users);
});

// Route to get a user by email
// Email se user get karne ke liye route
app.get("/users/:email", async (req, res) => {
  let email = req.params.email;

  let user = await db.collection("users").findOne({
    email: email,
  });

  res.send(user);
});

// Route to update a user (PUT)
// User ko update karne ke liye route (PUT)
app.put("/users", async (req, res) => {
  let email = req.body.email;
  let newData = req.body;

  let result = await db.collection("users").updateOne(
    { email: email },
    {
      $set: newData,
    },
  );

  res.send({
    message: "User Updated Successfully",
    result,
  });
});

// Route to partially update a user (PATCH)
// User ko partially update karne ke liye route (PATCH)
app.patch("/users", async (req, res) => {
  let email = req.body.email;
  let updates = req.body;

  let result = await db.collection("users").updateOne(
    { email: email },
    {
      $set: updates,
    },
  );

  res.send({
    message: "User Updated Successfully",
    result,
  });
});

// Route to delete a user
// User ko delete karne ke liye route
app.delete("/users", async (req, res) => {
  let email = req.body.email;

  let result = await db.collection("users").deleteOne({
    email: email,
  });

  res.send({
    message: "User Deleted Successfully",
    result,
  });
});

// Route to display all users in HTML format (inline HTML, not JSON)
// Sare users ko HTML format mein display karne ke liye route (inline HTML, JSON nahi)
app.get("/allusers", async (req, res) => {
  let users = await db.collection("users").find().toArray();

  let output = "";

  // Generate HTML output for each user
  // Har user ke liye HTML output generate karo
  users.forEach((user) => {
    output += `
    
      <div>

        <p>${user.name}</p>

        <p>Email: ${user.email}</p>

        <p>Phone: ${user.phone}</p>

        <p>City: ${user.city}</p>

        <hr>

      </div>

    `;
  });

  res.send(output);
});

// Start the server
// Server start karo
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
