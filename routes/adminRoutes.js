const express = require("express");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");
const {
  deleteUser,
  getUsers,
  searchUser,
} = require("../controller/adminController");
const router = express.Router();

router.get("/", auth, admin, getUsers);
router.get("/search", auth, admin, searchUser);
router.delete("/:id", auth, admin, deleteUser);

module.exports = router;
