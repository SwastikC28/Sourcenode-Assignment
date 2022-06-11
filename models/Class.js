const mongoose = require("mongoose");

const ClassSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name of the class"],
  },

  teacher: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Class", ClassSchema);
