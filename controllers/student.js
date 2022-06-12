const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("express-async-handler");
const Student = require("../models/Student");

// NOTE: CRUD OPERATION ACCESSIBLE BY ADMIN

// @desc    Get all students
// @route   GET /api/v1/student
// @access  Private/Admin
exports.getAllStudents = asyncHandler(async (req, res, next) => {
  const student = await Student.find();
  res.status(200).json({ success: true, data: student });
});

exports.getStudent = asyncHandler(async (req, res, next) => {
  const student = await Student.findById(req.params.id);
  res.status(200).json({ success: true, data: student });
});

// @desc    Create student
// @route   POST /api/v1/auth/students
// @access  Private/Admin
exports.createStudent = asyncHandler(async (req, res, next) => {
  const userid = req.params.userid;
  const classid = req.params.classid;

  const body = { userid, classAssigned: classid };

  const student = await Student.create(body);

  res.status(201).json({ success: true, data: student });
});

// @desc    Update student
// @route   PUT /api/v1/auth/students/:id
// @access  Private/Admin
exports.updateStudent = asyncHandler(async (req, res, next) => {
  const student = await student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: student });
});
