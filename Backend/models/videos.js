const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    name :{
        type: String,
        required : [true , 'section name is required'],
    },
    url :{
        type: String,
        required: [true, 'video is required'],
    },
    seen:{
        type : Boolean,
        default : false
    }

});

module.exports = mongoose.model('video' , videoSchema);