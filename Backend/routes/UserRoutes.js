const app = require("express");
const router = app.Router();


const {InstructorDataController} = require('../controllers/InstructorController.js');
const { AddToWishlist, RemoveWishlist, getWishlist } = require("../controllers/USerController.js");
const { getTeacherAndCourses } = require('../controllers/TeacherProfileController.js');
const {updateTeacherProfile} = require('../controllers/TeacherEditProfileController.js');


router.get('/wishlist', getWishlist)
router.get('/yourcourses')
router.get("/add-to-wl", AddToWishlist)
router.post("/remove-wishlist", RemoveWishlist)
router.get("/checkout/:coursename")

router.get('/instructorData', InstructorDataController);
router.get('/teacher/:id', getTeacherAndCourses);
router.put('/teachereditprofile/:id', updateTeacherProfile);

  


module.exports = router;