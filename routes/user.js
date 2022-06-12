const router = require("express").Router();

const {
  getUser,
  getUsers,
  getAllTeachers,
  getAllStudents,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.route("/").get(getUsers).post(createUser);
router.route("/teacher").get(getAllTeachers);
router.route("/student").get(getAllStudents);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
