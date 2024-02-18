const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
const TeacherSchema = require('../models/teacher.js'); 


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});


exports.updateTeacherProfile = async (req, res) => {
  try {
    const { userId } = req.params; 
    const teacher = await TeacherSchema.findById(userId);

    if (!teacher) {
      return res.status(404).json({ message: 'User not found' });
    }
    const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
      folder: 'MastersOfMusic' 
    });
    teacher.profileImage = uploadedImage.secure_url;
    await user.save();

    return res.status(200).json({ message: 'Profile image updated successfully', imageUrl: uploadedImage.secure_url });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};




