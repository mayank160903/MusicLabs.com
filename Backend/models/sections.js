const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    name :{
        type: String,
        required : [true , 'section name is required'],
    },
    videos :[
        {
            type : mongoose.Types.ObjectId,
            ref: 'Videos',

        }
    ]

});

module.exports = mongoose.model('sections' , sectionSchema);
