const express = require('express');


const router = express.Router();

const {registerController , listOfTeachers , updateRequest , ignoreRequest} = require('../controllers/TeacherController');
const {teacherDashboardStudentList, deleteTeacherDashboardStudent,numberOfStudentTeacherDashboard,courseWithCategory,totalEarnedMoney} = require('../controllers/DashboardTeacherProfileController.js');

router.post('/register' , registerController);

router.get('/lsitofteachersrequest' , listOfTeachers);

router.put('/acceptrequest/:id' , updateRequest);
router.delete('/ignorerequest/:id' , ignoreRequest)





router.get('/teacher/studentlist/:id',teacherDashboardStudentList);
router.delete('/teacherdashboard/student/:id', deleteTeacherDashboardStudent);
router.get('/teacher/numberofstudent/:id',numberOfStudentTeacherDashboard);
router.get('/teacher/noofcourseandcoursewithcategory/:id',courseWithCategory);
router.get('/teacher/earnmoney/:id',totalEarnedMoney);

module.exports =  router;
