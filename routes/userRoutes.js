const express = require("express");
const { userProfile } = require("../controllers/userController");
const { verifyToken } = require("../middlewares/auth");

const router = express.Router();

router.get("/profile", verifyToken, userProfile);

module.exports = router;
