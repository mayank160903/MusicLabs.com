const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
  
  
    firstName: { type: String, required: true},
    lastName : { type :String , required: true},
    email: { type: String, required: true },
    phone: { type: String },
    password: { type: String, required: true },
    
    role :{
      type : String,
      default : 'User',
      required : true
    },

    wishlist: [
        {
            type: mongoose.ObjectId,
            ref: "courses",
        },
    ],

    courses : [{
     course : {
        type: mongoose.ObjectId,
        ref: "courses"
      },
      progress : [
        {
          type: mongoose.ObjectId,
          ref: "progress"
        }  
      ]
    }
  ]
},

{
  timestamps: true,
}
);


module.exports = mongoose.model('Users', userSchema);
