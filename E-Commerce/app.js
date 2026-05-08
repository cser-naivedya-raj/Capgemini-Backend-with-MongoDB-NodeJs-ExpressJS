const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});