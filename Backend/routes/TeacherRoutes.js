const express = require('express');


const router = express.Router();

const {registerController , listOfTeachers , updateRequest , ignoreRequest , getSingleTeacher} = require('../controllers/TeacherController');

router.post('/register' , registerController);

router.get('/lsitofteachersrequest' , listOfTeachers);

router.put('/acceptrequest/:id' , updateRequest);
router.delete('/ignorerequest/:id' , ignoreRequest)

router.get('/getTeacher/:id' , getSingleTeacher)

module.exports =  router;
