const router = require("express").Router();

const {
  getClass,
  getClasses,
  createClass,
  updateClass,
  deleteClass,
} = require("../controllers/class");

router.route("/").get(getClass).post(createClass);
router.route("/:id").get(getClass).put(updateClass).delete(deleteClass);

module.exports = router;
