const app = require("express");
const router = app.Router();


const {InstructorDataController} = require('../controllers/InstructorController.js');
const { AddToWishlist, RemoveWishlist, getWishlist, createQuery, purchaseCourse, updateCourseProgress, getCourseProgress, getYourCourses } = require("../controllers/USerController.js");
const { getTeacherAndCourses } = require('../controllers/TeacherProfileController.js');
const {updateTeacherProfile} = require('../controllers/TeacherEditProfileController.js');


router.get('/wishlist', getWishlist)
router.get('/your-courses/:id', getYourCourses);

router.post('/course/progress', updateCourseProgress)
router.post('/course/get-progress', getCourseProgress)
router.post('/course/get-all-progress')

router.post("/add-to-wl", AddToWishlist)
router.post("/remove-wishlist", RemoveWishlist)

router.post("/purchase", purchaseCourse)
router.post("/contactus", createQuery)

router.get('/instructorData', InstructorDataController);
router.get('/teacher/:id', getTeacherAndCourses);
router.put('/teachereditprofile/:id', updateTeacherProfile);

  


module.exports = router;