const app = require("express");
const router = app.Router();


const {InstructorDataController} = require('../controllers/InstructorController.js');
const { getTeacherAndCourses } = require('../controllers/TeacherProfileController.js');


router.get('/wishlist')
router.get('/yourcourses')
router.get("/add-to-wl/:course")
router.post("/remove-wishlist/:Id")
router.get("/checkout/:coursename")
router.get("/remove/:course")
// router.get()

router.get('/instructorData', InstructorDataController)
router.get('/teacher/:id', getTeacherAndCourses);

  


module.exports = router;