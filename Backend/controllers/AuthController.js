const userSchema = require("../models/user.js");
const teacherSchema = require("../models/teacher.js");
const { hashPassword, comparePassword } = require("../helper/authhelper.js");
const multer = require("multer");
const JWT = require("jsonwebtoken");
const nodemailer = require('nodemailer');

const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Set the destination folder for uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // Set the filename
//   },
// });

// const upload = multer({ storage: storage });



exports.registerController = async (req, res) => {
  try {

    console.log("register");
    const { firstName, lastName, email, password, role, resume } = req.body;
    
    if (role === "User") {
      if (!firstName || !lastName || !email || !password) {
        return res
          .status(409)
          .send({ success: false, message: "Please fill all the details " });
      }

      const existingUser = await userSchema.findOne({ email: email });

      if (existingUser) {
        return res
          .status(400)
          .send({ success: false, message: "User already exist please login" });
      }

      console.log("first");

      const otp = generateOTP();
      console.log(otp);
      console.log("second");
      const mailOptions = {
        from: process.env.GMAIL,
        to: email,
        subject: 'Your OTP for Registration',
        text: `Your OTP is: ${otp} please confirm the signup`,
      };

      console.log("third");
      
      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        return res.status(500).send({ success: false, message: "Error sending email" });
      }

      console.log("fourth");
      return res.status(600).send({message : "Till here it's working"});

      const hashedPassword = await hashPassword(password);
      const user = new userSchema({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role,
      });
      await user.save();

      return res
        .status(200)
        .send({ success: true, message: "User Registered Successfully", user });
    } else {
      if (!firstName || !lastName || !email || !password) {
        return res
          .status(409)
          .send({ success: false, message: "Please fill all the details " });
      }

      const existingTeacher = await teacherSchema.findOne({ email: email });

      console.log("here further is coming");

      if (existingTeacher) {
        return res
          .status(400)
          .send({ success: false, message: "User already exists Please Login" });
      }

      const hashedPassword = await hashPassword(password);
      console.log("hash bhi hogya")
      const teacher = await teacherSchema({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role,
      });

      await teacher.save();
      return res
        .status(200)
        .send({ success: true, message: "Teacher registered successfully " });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Error While registering" });
  }
};

exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    
      var user = await userSchema.findOne({ email });
      console.log("first");
      if (user) {
        const check = await comparePassword(password, user.password);
        if (!check) {
          return res
            .status(404)
            .send({ success: false, message: "Your Details didn't match" });
        }
        const token = await JWT.sign(
          { id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "7d",
          }
        );
        return res
          .status(200)
          .send({
            success: success,
            message: "Sign In successful",
            user , token
          });
      }

     
      console.log("second");

      user = await teacherSchema.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .send({ success: false, message: "User not registered " });
      }
      if(user.isApproved===false){
        return res.status(400).send({success : false , message : "Teacher is not approved contact to admin"});
      }
      console.log("here 1");
      const check = await comparePassword(password, user.password);
      console.log("here 3");
      if (!check) {
        return res
          .status(400)
          .send({ success: false, message: "Your Details didn't match" });
      }
      console.log("third");
      const token = await JWT.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      console.log("fourth");
      return res
        .status(200)
        .send({
          success: true,
          message: "Login Successfully ",
          user,
          token,
        });
    }
   catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Error while login" });
  }
};

exports.googleController = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body);
    const user = await userSchema.findOne({ email: email });
    if (!user) {
      const teacher = await teacherSchema.findOne({ email: email });
      if (!teacher) {
        return res
          .status(401)
          .send({
            success: false,
            message: "User not found with email address",
          });
      }
      const token = await JWT.sign(
        { id: teacher._id, role: teacher.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      return res
        .status(200)
        .send({
          success: true,
          message: "Sign in Successfull",
          teacher,
          token,
        });
    }

    return;
  } catch (error) {}
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (role === "User") {
      const user = await userSchema.find({ email });
      if (!user) {
        return res
          .status(404)
          .send({
            success: false,
            message: "User not found with this email id",
          });
      }
      const hashedPassword = await hashPassword(password);
      await userSchema.findByIdUpdate(
        user._id,
        { password: hashedPassword },
        { new: true }
      );

      return res
        .status(201)
        .send({ success: true, message: "User updated successfully", user });
    } else {
      const teacher = await teacherSchema.find({ email });
      if (!teacher) {
        return res
          .status(404)
          .send({
            success: false,
            message: "User not found with this email id",
          });
      }
      const hashedPassword = await hashPassword(password);
      await teacherSchema.findByIdAndUpdate(
        user._id,
        { password: hashedPassword },
        { new: true }
      );

      return res
        .status(201)
        .send({ success: true, message: "User updated successfully", user });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Error while updating the password" });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const newData = req.body;

    if (req.user.role === "User") {
      const user = await userSchema.findById(req.user._id);
      if (!user) {
        return res
          .status(404)
          .send({ success: false, message: "User Not found" });
      }
      for (const field in newData) {
        if (newData.hasOwnProperty(field) && user[field] !== newData[field]) {
          user[field] = newData[field];
        }
      }
      const updatedUser = await user.save();
      return res
        .status(201)
        .send({
          success: true,
          message: "User updated successfully",
          updatedUser,
        });
    } else {
      const teacher = await teacherSchema.findById(req.user._id);
      if (!teacher) {
        return res
          .status(404)
          .send({ success: false, message: "Teacher Not found" });
      }
      for (const field in newData) {
        if (
          newData.hasOwnProperty(field) &&
          teacher[field] !== newData[field]
        ) {
          teacher[field] = newData[field];
        }
      }
      const updatedUser = await teacher.save();
      return res
        .status(201)
        .send({
          success: true,
          message: "User updated successfully",
          updatedUser,
        });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Error while updating the profile" });
  }
};
