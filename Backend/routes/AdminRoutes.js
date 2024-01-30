const express = require("express");
const router = express.Router();

const {getAllQuery , getAllTeachers} = require('../controllers/AdminController');

router.get('/query' , getAllQuery);

router.get('/allteachers' ,getAllTeachers );


module.exports = router;