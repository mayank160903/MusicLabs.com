const contactModel  = require('../models/contact.js');

const courseModel = require('../models/course.js');


exports.getAllQuery = async(req , res) =>{
    try{
        const query = await contactModel.find({});

        return res.status(201).send({success : true , message : "All queryies" , query});

    }catch(error){

        return res.status(500).send({success : false , message : "Error while querying"});
    }
}

exports.createQuery = async(req , res) =>{
    try{
        const {firstName , lastName , email , message } = req.body;

        if(!firstName || !lastName || !email || !password || !message){
            return res.status(409).send({success : false , message : " Please fill all the details"});

        }
        const contact = await new contactModel({firstName , lastName , email , message}).save();

        return res.status(201).send({success : true ,message : "Query created Successfully" , contact});

    }
    catch(error){

        return res.status(500).send({success : false , message : "Error while creating query"});
    }

}

exports.deleteController = async(req , res) =>{
    try{
        const id = req.param.id;
        const qid = id.slice(1);
        const query = await contactModel.findByIdAndDelete(id);

        return res.status(201).send({success : true , message : "Query deleted successfully "})


    }
    catch(error){
        return res.status(500).send({success : false , message : "Error while deleting query"});
    }

}

exports.getAllCourses = async(req , res) =>{
    try{
        const courses = await courseModel.find({});

        return  res.status(201).send({success : true , message : "All courses" , courses});
    }
    catch(error){
        return res.status(500).send({success : false , message : "Error while getting all courses"});
    }

}


exports.deleteCourses = async(req , res) =>{

    try{
        const id = req.params.id;
        const cid = id.slice(1);

        const course = await courseModel.findByIdAndDelete(cid);

        return res.status(201).send({success : true , message : "Course Deleted Successfully" , course});
    }
    catch(error){

        return res.status(500).send({success : false , message :  "Error while deleting the courses"});
    }
}




