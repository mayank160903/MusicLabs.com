const userSchema = require("./models/user.js");
const contactSchema = require("./models/contact.js");
const teacherSchema = require(__dirname + "/models/teacher.js");
const coursesSchema = require(__dirname + "/models/course.js");
// const userRoute = require('./routes/UserRoutes.js');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cors  = require('cors');
const fileUpload = require('express-fileupload');

dotenv.config();

const express = require('express');



const app = express();

app.use(fileUpload());

const AuthRoutes = require("./routes/AuthRoutes.js");
const UserRoutes = require("./routes/UserRoutes.js");
const paymentRoutes = require("./routes/PaymentRoutes.js");

const connectDb = require('./database/db.js');




app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.use(express.json());

app.use(cors());


connectDb();





app.use('/api/v1/user', AuthRoutes)
app.use('/api/v1/user', UserRoutes)
app.use('/api', paymentRoutes)


const PORT = 8000;
app.listen(PORT, (req, res) => {
    console.log(`server is listening on PORT number ${PORT}`);
})