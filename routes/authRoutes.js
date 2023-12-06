const express = require("express");
const router = express.Router();
const {
    loginPage,
    login,
    signupPage,
    register,
} = require("../controllers/authController");

router.get("/login", loginPage).post("/login", login);
router.get("/signup", signupPage).post("/signup", register);

module.exports = router;
