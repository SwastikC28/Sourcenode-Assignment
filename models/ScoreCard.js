const mongoose = require("mongoose");

const ScoreCardSchema = mongoose.Schema({
  studentid: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
    required: true,
  },

  name: {
    type: String,
    required: [true, "Please provide Subject Name."],
  },

  dateOfExam: {
    type: Date,
    required: [true, "Please provide Date of Exam"],
  },

  dateOfScoreCard: {
    type: Date,
    default: Date.now(),
  },

  score: {
    type: Number,
    min: 0,
    max: 100,
    required: [true, "Score for the subject is Required."],
  },

  comments: {
    type: String,
    required: [true, "Please add comment for this student's scorecard."],
  },
});

module.exports = mongoose.model("ScoreCard", ScoreCardSchema);
