const express = require("express");
const router = express.Router();

const {getAllQuery , getAllTeachers , getAllUsers} = require('../controllers/AdminController');

router.get('/query' , getAllQuery);

router.get('/teacheruniversalSearch' ,getAllTeachers );

router.get('/universalSearch' , getAllUsers);


module.exports = router;