const express = require("express");
const router = express.Router();
const {
    loginPage,
    login,
    signupPage,
    register,
    jwtverify,
} = require("../controllers/authController");
const { verifyToken } = require("../middlewares/auth");

router.get("/login", loginPage).post("/login", login);
router.get("/signup", signupPage).post("/signup", register);
router.get("/jwtverify", verifyToken, jwtverify);

module.exports = router;
