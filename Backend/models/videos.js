const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    name :{
        type: String,
        required : [true , 'section name is required'],
    },
    videos :{
        data : Buffer,
        contentType : String,
    },
    seen:{
        type : Boolean,
        default : false
    }

});

module.exports = mongoose.model('video' , videoSchema);