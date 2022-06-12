const router = require("express").Router();

const {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
} = require("../controllers/student");

router.route("/").get(getAllStudents);
router.route("/:userid/:classid").post(createStudent);
router.route("/:id").get(getStudent).put(updateStudent);

module.exports = router;
