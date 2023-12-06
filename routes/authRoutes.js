const express = require("express");
const router = express.Router();
const { loginPage, login } = require("../controllers/authController");

router.get("/login", loginPage).post("/login", login);

module.exports = router;
