const express = require("express");
const router = express.Router();

const {getAllQuery , getAllTeachers , getAllUsers , getAllCourses} = require('../controllers/AdminController');

router.get('/query' , getAllQuery);

router.get('/teacheruniversalSearch' ,getAllTeachers );

router.get('/universalSearch' , getAllUsers);

router.get('/allcourses' , getAllCourses)


module.exports = router;