const express = require("express");
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





// cloudinary.config({
//     cloud_name: process.env.CLOUDNAME,
//     api_key: process.env.APIKEY,
//     api_secret: process.env.APISECRET
// });


// // img storage path
// const imgconfig = multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,"./uploads")
//     },
//     filename:(req,file,callback)=>{
//         callback(null,`image-${Date.now()}.${file.originalname}`)
//     }
// });

// // img filter
// const isImage = (req,file,callback)=>{
//     if(file.mimetype.startsWith("image")){
//         callback(null,true)
//     }else{
//         callback(new Error("only images is allow"))
//     }
// }

// const upload = multer({
//     storage:imgconfig,
//     fileFilter:isImage
// })

router.put('/teachereditprofile/:id',updateTeacherProfile);



module.exports = router;