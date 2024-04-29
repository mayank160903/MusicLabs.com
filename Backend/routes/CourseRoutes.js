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

const upload = Multer({
  storage: storage
});

router.get('/get-signature', getSignature
// #swagger.description = 'Get Signature for Uploading Image on Cloudinary, Required for Uploading Image'
/* #swagger.responses[200] = {
    description: 'Signature generated successfully',
    schema: {
        signature: 'cloudinary_signature',
        timestamp: '12/07/2024:13:03:22PM'
    }
} */

/* #swagger.responses[500] = {
    description: 'Internal Server Error',
    schema: {
        error: 'Internal server error message'
    }
} */

);


router.post('/createcourse', requireSignIn,  (req,res,next)=>{console.log(req.files); next();},upload.single('image'), createCourse
// #swagger.description = 'Create A New Course'
);

router.post('/ratecourse', requireSignIn,  rateCourse
// #swagger.description = 'Rate the Course'
)

router.get('/getCourseRating/:id', getRatings
// #swagger.description = 'Gets the Rating of the Course'
)

router.post('/add-comment', addComment
// #swagger.description = 'Adds New Comment to the Course'
);

router.post('/get-comments', getComments
// #swagger.description = 'Gets All Comments of the Course'
 /* #swagger.responses[200] = {
            description: 'Comments Fetched Successfully',
            schema: { $ref: '#/definitions/Comments' }
    } */
)

router.post('/addcontent',requireSignIn, addVideoContent
// #swagger.description = 'Adds New Video Content to the Course'
);

router.post('/deletevideo', deleteVideoContent
// #swagger.description = 'Delete Video Content to the Course'
);
router.post('/editVideoTitle', editVideoTitleHandler
// #swagger.description = 'Edit Video Title Handler'
);
router.post('/addsection',  addSection
// #swagger.description = 'Adds New Section in the Course'
);
router.post('/editsection', editSectionHandler
// #swagger.description = 'Edits Section Title in the Course'
);
router.post('/deletesection', deleteSectionHandler
// #swagger.description = 'Deletes Section from the Course'
);

router.get('/description/:courseId', getCourseDescription
// #swagger.description = 'Gets the Description of the Course'
)
router.get('/:courseId', getCourseInfo
// #swagger.description = 'Gets the Information of the Course'
);

router.get('/singlecourse/:id', getCourse
// #swagger.description = 'Gets the Information of a single Course in complete detail'

);

module.exports = router;
