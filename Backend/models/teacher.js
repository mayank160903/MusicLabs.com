

const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const teacherSchema = new Schema({
  
  firstName: {type: String,required: true},
  lastName:{type: String,required: true},
 
  email: { type: String, required: true },
  
  password: { type: String, required: true },
  role :{
        type : String,
        default : 'Teacher',
        required : true
      },
  resume : {
      data :Buffer,
      contentType : String,
  },  
  courses : [
    {
        type: mongoose.ObjectId,
        ref: "courses",
    },
],

location:{
  type:String
},
isApproved :{
  type : Boolean,
  default : false,
},

postGraduation:{
  type:String
},
master:{
  type:String
},
experience:{
  type:String
},
achievement:{
  type:String
},

},{ timestamps: true });




module.exports =  mongoose.model('teachers', teacherSchema);