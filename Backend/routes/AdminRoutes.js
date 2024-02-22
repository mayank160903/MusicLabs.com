const express = require("express");
const router = express.Router();

const {getAllQuery , getAllTeachers , getAllUsers , getAllCourses , getAllCategories , deleteCategory , createCategory , getPurchases} = require('../controllers/AdminController');

router.get('/query' , getAllQuery);

router.get('/teacheruniversalSearch' ,getAllTeachers );

router.get('/universalSearch' , getAllUsers);

router.get('/allcourses' , getAllCourses);

router.get('/allcategories' , getAllCategories);

router.delete('/deletecategories/:id' , deleteCategory);

router.post('/create-category' , createCategory);

router.get('/getpurchases' , getPurchases);


module.exports = router;