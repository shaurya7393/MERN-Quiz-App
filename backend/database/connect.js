const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Database Connected");
    } catch (error) {
        console.error("Connection failed:", error);
    }
}

module.exports = { connectDB };
