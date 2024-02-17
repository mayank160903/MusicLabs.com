const userSchema = require('../models/user.js');

exports.AddToWishlist = async (req,res) => {
    
    const {userId, courseId} = req.body;

    try {
        const user = await userSchema.findOne(userId);
        console.log(user)

        if(!user){
            res.status(404).json({error: "User not found"});
        }

        if(!user.wishlist.includes(courseId)){
            user.wishlist.push(courseId);
            await user.save();
            res.status(200).json({message: "Course added to wishlist"});
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
    
        try {
            const user = await userSchema.findOne(userId);
            console.log(user)
    
            if(!user){
                res.status(404).json({error: "User not found"});
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


// exports.YourCourses = async (req,res) => {
//     const {userId} = req.body;

//     try {
//         const user = await user.findOne(userId);
//         console.log(user);
