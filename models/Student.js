const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  userid: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },

  classAssigned: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
