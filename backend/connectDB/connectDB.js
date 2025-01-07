const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database connected successfully");
  } catch (error) {
    console.log("database error: ", error);
  }
};

module.exports = connectDB;
