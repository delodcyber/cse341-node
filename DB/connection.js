require("dotenv").config();

const mongoose = require("mongoose");
const URI = process.env.MongoDB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);

    console.log("MongoDB connected");
    console.log("Database:", mongoose.connection.db.databaseName);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;