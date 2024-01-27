const express = require("express");
const router = express.Router();

const {getAllQuery} = require('../controllers/AdminController');

router.get('/query' , getAllQuery);


module.exports = router;