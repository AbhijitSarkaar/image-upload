const express = require("express");
const multer = require("multer");
const router = express.Router();
const { uploadPage, uploadFiles } = require("../controllers/uploadController");
const { userHomePage } = require("../controllers/userController");

//for storing in the filesystem

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public/uploads");
//     },
//     filename: function (req, file, cb) {
//         cb(null, `${file.originalname}`);
//     },
// });

//for storing in memory

const storage = multer.memoryStorage({});

const upload = multer({
    storage: storage,
});

router.get("/", userHomePage);

router
    .get("/upload", uploadPage)
    .post("/upload", upload.array("files"), uploadFiles);

module.exports = router;
