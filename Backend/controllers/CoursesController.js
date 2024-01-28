const teacherSchema = require('../models/teacher.js');
const coursesSchema = require('../models/course.js');
const categorySchema = require('../models/category.js');

const cloudinary = require("cloudinary").v2;
const Multer = require("multer");
const bodyParser = require("body-parser");


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });

  const apiSecret = cloudinary.config().api_secret;
  
  
  function handleUploadVideo(file) {
    try{
      cloudinary.uploader.upload (file, {
        resource_type: 'image'
      }).then((res) => {
        console.log(res);
        return res;
      });
    } catch (e){
      console.log(e);
    }
  }


exports.getSignature = async (req,res) => {
     

  const timestamp = Math.round((new Date).getTime()/1000);

  const signature = cloudinary.utils.api_sign_request({
    timestamp: timestamp,
    folder: 'MastersOfMusic'}, apiSecret);
  
    res.send({signature, timestamp});


//     upload(req, res, async (err) => {
//       if (err) {
//         return res.json({ errors: err });
//       }
//     try {
//         const b64 = Buffer.from(req.file.buffer).toString("base64");
//         let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
//         const cldRes = await handleUploadVideo(dataURI);
//         res.json(cldRes);
//       } catch (error) {
       
//         res.send({
//           message: error.message,
//         });
//       }


//     res.send({message: "Video Uploaded"})

// })
}

exports.getCourseInfo = async (req,res) => {
    try{
        const {courseId} = req.params;
        const course = await coursesSchema.findById(courseId);
        if(!course){
            return res.status(404).send({success: false, message: "Course not found"});
        }
        return res.status(200).send({success: true, message: "Course fetched successfully", course});
    } catch (error){
        return res.status(500).send({success: false, message: "Error while fetching course"});
    }
}

exports.createCourse = async (req,res) => {
    try{
      console.log("inside create course");
      console.log(req.body)
        const {title, description, price, category, instructor, teacherId} = req.body;
        
        const teacher = await teacherSchema.findById(teacherId);
        if(!teacher){
            return res.status(404).send({success: false, message: "Teacher not found"});
        }
        const categoryId = await categorySchema.findOne({name: category})
        // const categoryId = await categorySchema.find({name: category});
        console.log("yeh krlo pehle");
        console.log(categoryId);
        console.log(categoryId._id)
        console.log(typeof(categoryId._id));

        const course = await coursesSchema.create({
            title : title,
            description: description,
            price: price,
            category: categoryId._id,
            teacher: teacherId,
            sections: []
        });
        console.log(course)
        return res.status(200).send({success: true, message: "Course created successfully", course});
    } catch (error){
      console.log(error)
        return res.status(500).send({success: false, message: "Error while creating course"});
    }

}