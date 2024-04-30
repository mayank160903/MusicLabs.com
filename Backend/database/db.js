const mongoose = require("mongoose");

const connectDb = async () => {
    try {

    await mongoose.connect(process.env.NODE_ENV === "test"
    ? process.env.MONGO_URL
    : process.env.MONGO_URL);

        console.log('MongoDB connection established');
    }
    catch (error) {
        console.log('Error occured');
    }
}

module.exports = connectDb;
