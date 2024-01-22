const teacherSchema = require('../models/teacher.js');

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


exports.UploadVideo = async (req,res) => {
     
  // const storage = Multer.diskStorage({
  //   filename: (req, file, cb) => {
  //     const fileExt = file.originalname.split(".").pop();
  //     const filename = `${new Date().getTime()}.${fileExt}`;
  //     cb(null, filename);
  //   },
  // });

// Server-side function used to sign an Upload Widget upload.

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