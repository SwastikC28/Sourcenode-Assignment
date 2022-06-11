const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("express-async-handler");
const Class = require("../models/Class");

// NOTE: CRUD OPERATION ACCESSIBLE BY ADMIN

// @desc    Get all class
// @route   GET /api/v1/auth/class
// @access  Private/Admin
exports.getClasses = asyncHandler(async (req, res, next) => {
  const classes = await Class.find();
  res.status(200).json({ success: true, classes });
});

// @desc    Get single class
// @route   GET /api/v1/auth/class/:id
// @access  Private/Admin
exports.getClass = asyncHandler(async (req, res, next) => {
  const classes = await Class.findById(req.params.id);
  res.status(200).json({ success: true, data: classes });
});

// @desc    Create class
// @route   POST /api/v1/auth/class
// @access  Private/Admin
exports.createClass = asyncHandler(async (req, res, next) => {
  const classes = await Class.create(req.body);
  res.status(201).json({ success: true, data: classes });
});

// @desc    Update class
// @route   PUT /api/v1/auth/class/:id
// @access  Private/Admin
exports.updateClass = asyncHandler(async (req, res, next) => {
  const classes = await Class.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: classes });
});

// @desc    Delete class
// @route   DELETE /api/v1/auth/class/:id
// @access  Private/Admin
exports.deleteClass = asyncHandler(async (req, res, next) => {
  await Class.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, data: {} });
});
