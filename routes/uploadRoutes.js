const express = require("express");
const multer = require("multer");
const router = express.Router();
const { uploadPage, uploadFiles } = require("../controllers/uploadController");

const storageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`);
    },
});

const upload = multer({
    storage: storageEngine,
});

router
    .get("/upload", uploadPage)
    .post("/upload", upload.array("files"), uploadFiles);

module.exports = router;
