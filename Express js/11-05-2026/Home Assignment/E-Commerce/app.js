const express = require("express");
const cors = require("cors");

const app = express();

const router = require("./routes/authRoutes");
const productRouter = require("./routes/productRoute");

const errorHandler = require("./middleware/errorMiddleware");

app.use(cors());
app.use(express.json());

app.use("/api/auth", router);
app.use("/api", productRouter);


// GLOBAL ERROR MIDDLEWARE
app.use(errorHandler);

module.exports = app;