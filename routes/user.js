const router = require("express").Router();

const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
