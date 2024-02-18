const express = require("express");
const app = require("express");
const router = app.Router();







const {InstructorDataController} = require('../controllers/InstructorController.js');
const { getTeacherAndCourses } = require('../controllers/TeacherProfileController.js');
const {updateTeacherProfile} = require('../controllers/TeacherEditProfileController.js');


router.get('/wishlist')
router.get('/yourcourses')
router.get("/add-to-wl/:course")
router.post("/remove-wishlist/:Id")
router.get("/checkout/:coursename")
router.get("/remove/:course")
// router.get()

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