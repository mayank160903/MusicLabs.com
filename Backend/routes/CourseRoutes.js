const express = require("express");
const { UploadVideo } = require("../controllers/CoursesController");
const router = express.Router();
const Multer = require("multer");
const bodyParser = require("body-parser");
const storage = new Multer.memoryStorage();

const upload = Multer({
  storage,
});
console.log("Nope")

router.use(bodyParser.raw({ type: "multipart/form-data" }));

router.post('/upload-video' ,upload.single("video"), UploadVideo);


module.exports = router;
