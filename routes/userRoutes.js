const express = require("express");
const { userHomePage } = require("../controllers/userController");
const router = express.Router();

router.get("/:id", userHomePage);

module.exports = router;
