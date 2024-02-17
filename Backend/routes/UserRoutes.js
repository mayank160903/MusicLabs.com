const app = require("express");
const router = app.Router();


const {InstructorDataController} = require('../controllers/InstructorController.js');
const { AddToWishlist, RemoveWishlist, getWishlist } = require("../controllers/USerController.js");


router.get('/wishlist', getWishlist)
router.get('/yourcourses')
router.get("/add-to-wl", AddToWishlist)
router.post("/remove-wishlist", RemoveWishlist)
router.get("/checkout/:coursename")

router.get('/instructorData', InstructorDataController)

  


module.exports = router;