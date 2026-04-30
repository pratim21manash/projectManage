const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/database");
const app = express();

connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
