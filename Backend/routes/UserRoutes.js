const app = require("express");
const router = app.Router();



router.get('/wishlist')
router.get('/yourcourses')
router.get("/add-to-wl/:course")
router.post("/remove-wishlist/:Id")
router.get("/checkout/:coursename")
router.get("/remove/:course")

module.exports(router)