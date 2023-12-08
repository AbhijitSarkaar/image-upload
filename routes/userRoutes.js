const express = require("express");
const { userHomePage, userProfile } = require("../controllers/userController");
const { verifyToken } = require("../middlewares/auth");

const router = express.Router();

router.get("/:id", userHomePage);
router.get("/profile/:id", verifyToken, userProfile);

module.exports = router;
