const express = require("express");
const { getSignature, createCourse, getCourseInfo, addSection, addVideoContent, editSectionHandler, deleteSectionHandler, deleteVideoContent, editVideoTitleHandler, getCourseDescription,getRatings, addComment, getComments , getCourse, rateCourse } = require("../controllers/CoursesController");
const router = express.Router();
const Multer = require("multer");
const bodyParser = require("body-parser");
const multer = require("multer");
const { requireSignIn } = require("../middleware/authmiddleware");
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});


// Configure Multer to use Cloudinary as storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'cover', // optional, destination folder in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png'], // optional, allowed formats
    // other configuration options
  },
})

// file.fieldname + '-' + Date.now() + path.extname

const upload = Multer({
  storage: storage
});

console.log("inside course route")


router.get('/get-signature', getSignature);


router.post('/createcourse', requireSignIn,  (req,res,next)=>{console.log(req.files); next();},upload.single('image'), createCourse);
router.post('/ratecourse', requireSignIn,  rateCourse)
router.get('/getCourseRating/:id', getRatings)
router.post('/add-comment', addComment);
router.post('/get-comments', getComments)

router.post('/addcontent',requireSignIn, addVideoContent);
router.post('/deletevideo', deleteVideoContent);
router.post('/editVideoTitle', editVideoTitleHandler);
router.post('/addsection',  addSection);
router.post('/editsection', editSectionHandler);
router.post('/deletesection', deleteSectionHandler);

router.get('/description/:courseId', getCourseDescription)
router.get('/:courseId', getCourseInfo);

router.get('/singlecourse/:id', getCourse);

module.exports = router;
