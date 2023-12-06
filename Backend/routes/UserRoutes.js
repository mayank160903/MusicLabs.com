const app = require("express");
const router = app.Router();


const {InstructorDataController} = require('../controllers/InstructorController.js');


router.get('/wishlist')
router.get('/yourcourses')
router.get("/add-to-wl/:course")
router.post("/remove-wishlist/:Id")
router.get("/checkout/:coursename")
router.get("/remove/:course")


router.get('/instructorData', InstructorDataController)

  


module.exports = router;