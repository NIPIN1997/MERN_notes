const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/sample3");
    console.log("database created");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDb };
