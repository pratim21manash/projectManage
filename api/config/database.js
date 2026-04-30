const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("MongoDb connectedsccessfully");
  } catch (err) {
    console.log("Mongodb onnection error", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
