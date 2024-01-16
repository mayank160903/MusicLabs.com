const express = require("express");
const router = express.Router();

const {registerController , loginController , googleController} = require('../controllers/AuthController');

router.post('/register' , registerController);

router.post('/login' , loginController)

router.post('/google' , googleController);

module.exports = router;
