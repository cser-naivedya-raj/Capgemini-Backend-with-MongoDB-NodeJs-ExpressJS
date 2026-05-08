require("dataenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const connectDB = require("./config/db");
connectDB();