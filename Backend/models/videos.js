const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    name :{
        type: String,
        required : [true , 'section name is required'],
    },
    videos :{
        data : Buffer,
        contentType : String,
    }

});

module.exports = mongoose.model('video' , videoSchema);