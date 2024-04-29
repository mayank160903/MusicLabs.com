const app = require("express");
const router = app.Router();


const {InstructorDataController} = require('../controllers/InstructorController.js');
const { AddToWishlist, RemoveWishlist, getWishlist, createQuery, purchaseCourse, updateCourseProgress, getCourseProgress, getYourCourses } = require("../controllers/UserController.js");
const { getTeacherAndCourses } = require('../controllers/TeacherProfileController.js');
const {updateTeacherProfile} = require('../controllers/TeacherEditProfileController.js');
const {dashboardTeacherProfile} = require('../controllers/DashboardTeacherProfileController.js')
const {updateStudentProfile, getStudent} = require('../controllers/StudentEditProfileController');

const { requireSignIn } = require("../middleware/authmiddleware.js");


router.get('/wishlist',requireSignIn, getWishlist)
router.get('/your-courses/:id',requireSignIn, getYourCourses);

router.post("/add-to-wl", requireSignIn, AddToWishlist)
router.post("/remove-wishlist", requireSignIn, RemoveWishlist)
router.post("/purchase", requireSignIn, purchaseCourse)


router.post('/course/progress', requireSignIn, updateCourseProgress)
router.post('/course/get-progress', requireSignIn, getCourseProgress)


router.post("/contactus",createQuery)
router.get('/instructorData', InstructorDataController);
router.get('/teacher/:id', getTeacherAndCourses);


router.put('/teachereditprofile/:id',updateTeacherProfile);
router.put('/studenteditprofile/:id',updateStudentProfile);

router.get('/dashboardteacherprofile/:id', dashboardTeacherProfile);
router.get('/studentprofile/:id', getStudent);

module.exports = router;