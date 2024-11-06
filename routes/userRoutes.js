const express = require("express");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");
const {
  getProfile,
  updateProfile,
  updatePassword,
} = require("../controller/userController");
const router = express.Router();

router.get("/profile", auth, getProfile);
router.put("/profile", auth, updateProfile);
router.put("/profile/password", auth, updatePassword);

module.exports = router;
