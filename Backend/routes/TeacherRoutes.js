const express = require('express');


const router = express.Router();

const {registerController , listOfTeachers , updateRequest , ignoreRequest} = require('../controllers/TeacherController');

router.post('/register' , registerController);

router.get('/lsitofteachersrequest' , listOfTeachers);

router.put('/acceptrequest/:id' , updateRequest);
router.delete('/ignorerequest/:id' , ignoreRequest)

module.exports =  router;
