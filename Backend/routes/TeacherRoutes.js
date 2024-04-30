const express = require('express');


const router = express.Router();

const {registerController , listOfTeachers , updateRequest , ignoreRequest, getSingleTeacher } = require('../controllers/TeacherController');
const {teacherDashboardStudentList, deleteTeacherDashboardStudent,numberOfStudentTeacherDashboard,courseWithCategory,totalEarnedMoney, studentComment} = require('../controllers/DashboardTeacherProfileController.js');

router.post('/register' , registerController);

router.get('/lsitofteachersrequest' , listOfTeachers
// #swagger.description = 'Get List of Teachers Request'
);

router.put('/acceptrequest/:id' , updateRequest);

router.delete('/ignorerequest/:id' , ignoreRequest)


router.get('/teacher/studentlist/:id',teacherDashboardStudentList,
// #swagger.description = 'Get Student List of a particular teacher'
);

router.delete('/teacherdashboard/student/:id', deleteTeacherDashboardStudent,
// #swagger.description = 'Delete Student from Teacher Dashboard'
);

router.get('/teacher/numberofstudent/:id',numberOfStudentTeacherDashboard,
// #swagger.description = 'Get Number of Students'
);

router.get('/teacher/noofcourseandcoursewithcategory/:id',courseWithCategory
// #swagger.description = 'Get Number of Courses and Courses with Category'
);

router.get('/teacher/earnmoney/:id',totalEarnedMoney
// #swagger.description = 'Get Total Earned Money'
);

router.get('/getTeacher/:id' , getSingleTeacher,
// #swagger.description = 'Get Single Teacher'
)

router.get('/teacher/studentcomment/:id',studentComment
// #swagger.description = 'Get Student Comments'
);

module.exports =  router;
