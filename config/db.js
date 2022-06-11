const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected Successfully`);
  } catch (error) {
    console.log(
      `There was some Error Connecting to the Server. Error:${error}`
    );
    process.exit();
  }
};

module.exports = connectDB;
