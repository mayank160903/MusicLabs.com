const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    data : {
        type : String , 
        required : [true , 'Data is required'],
    },
    userId :{
        type : mongoose.Types.ObjectId,
        ref : 'Users',
        required : [true , 'For Comment userId is required'],

    },



    

})

module.exports = mongoose.model('comment', commentSchema);