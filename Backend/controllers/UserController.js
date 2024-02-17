const contactSchema = require('../models/contact.js');
const userSchema = require('../models/user.js');

exports.AddToWishlist = async (req,res) => {
    
    const {userId, courseId} = req.body;
    console.log(userId)
    try {
        const user = await userSchema.findOne({'_id' : userId});
        console.log(user)

        if(!user){
            res.status(404).json({error: "User not found"});
        }

        if(!user.wishlist.includes(courseId)){
            user.wishlist.push(courseId);
            // const course = await courseSchema.findOne(courseId).populate;
            await user.save();
            res.status(200).json({message: "Course added to wishlist", course: courseId});
    } else {
        res.status(400).json({error: "Course already in wishlist"});
        }
    } catch (e) {
        console.error("error: " + e.message);
        res.status(500).json({ error: e.message });
    }   
}



exports.RemoveWishlist = async (req,res) => {
        
        const {userId, courseId} = req.body;
        console.log(userId)
        try {
            const user = await userSchema.findById(userId);
            console.log(user)
    
            if(!user){
                return res.status(404).json({error: "User not found"});
            }
    
            if(user.wishlist.includes(courseId)){
                user.wishlist.pull(courseId);
                await user.save();
                res.status(200).json({message: "The Respective Course is Removed from Wishlist"});
        } else {
            res.status(400).json({error: "Course not in wishlist"});
            }
        } catch (e) {
            console.error("error: " + e.message);
            res.status(500).json({ error: e.message });
        }   
}

exports.getWishlist = async (req,res) => {
    const {userId} = req.body;

    try {
        const user = await userSchema.findOne(userId).populate('wishlist','-sections');
        console.log(user);
        if(!user){
            res.status(404).json({error: "User not found"});
        }
        
        res.status(200).json({wishlist: user.wishlist});
    } catch (e) {
        console.error("error: " + e.message);
        res.status(500).json({ error: e.message });
    }
}

exports.purchaseCourse = async (req,res) => {

    const {userId, courseId} = req.body;
    console.log(userId)
    try {
        const user = await userSchema.findById(userId);
        // const course = await courseSchema.findOne(cdourseId);
        if(!user){
            return res.status(404).json({error: "User not found"});
        }

        if(user.wishlist.includes(courseId)){
            user.wishlist.pull(courseId);
        }

        if(!user.courses.find((course)=>{course.course == courseId})){
            user.courses.push({course: courseId, progress: []});
            await user.save();
            res.status(200).json({message: "Course purchased successfully", course: courseId});
        } else {
            res.status(400).json({error: "Course already purchased, Refund Initilized"});
        }
    } catch (e) {
        console.error("error: " + e.message);
        res.status(500).json({ error: e.message });
    }
}

exports.createQuery = async (req,res) => {
    const {firstName, lastName, email, message} = req.body;
    
    if(!firstName || !email || !message){
        return res.status(400).json({error: "Please fill all the fields"});
    }

    try {
        const query = await contactSchema.create({
            firstName,
            lastName,
            email,
            message
        })
        res.status(200).json({message: "Query Submitted Successfully"});
    } catch (e) {
        console.error("error: " + e.message);
        res.status(500).json({ error: e.message });
    }
}
