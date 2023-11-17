const userSchema = require(__dirname + "/models/user.js");
const contactSchema = require(__dirname + "/models/contact.js");
const teacherSchema = require(__dirname + "/models/teacher.js");
const coursesSchema = require(__dirname + "/models/course.js");
// const userRoute = require('./routes/UserRoutes.js');
const bodyParser = require("body-parser");

const express = require('express');
const path = require('path');
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");


const AuthRoutes = require(__dirname + "./routes/AuthRoutes.js");


const connectDb = require('./data/db.js');
const session=require("express-session");
const { homedir } = require('os');
const user = require('./models/user.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(express.json());



app.set("view engine", "ejs");
app.set('views','./views');
connectDb();
app.use(session({
    secret: "Key sign",
    resave: false,
    saveUninitialized: false,
    
}))


app.use('/', UserRoutes)

app.use('/', AuthRoutes)



const PORT = 8000;
app.listen(PORT, (req, res) => {
    console.log(`server is listening on PORT number ${PORT}`);
})