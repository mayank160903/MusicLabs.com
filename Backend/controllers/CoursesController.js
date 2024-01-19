const teacherSchema = require('../models/teacher.js');

const cloudinary = require("cloudinary").v2;
const Multer = require("multer");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });


  const storage = new Multer.memoryStorage();
  const upload = Multer({
    storage,
  });
  
async function handleUploadVideo(file) {
    const res = await cloudinary.uploader.upload(file, {
      resource_type: 'video'
    });
    return res;
  }


exports.UploadVideo = async (req,res) => {
    
    // const {name, video} = req.body;
    // console.log(req.body)
    // console.log(video)

    console.log("lets goo")
    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await handleUpload(dataURI);
        res.json(cldRes);
      } catch (error) {
        console.log(error);
        res.send({
          message: error.message,
        });
      }


    res.send({message: "Video Uploaded"})

}