const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
  userid: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Teacher", TeacherSchema);
