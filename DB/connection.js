require('dotenv').config();

const mongoose = require('mongoose');
const URI = process.env.MongoDB_URI;

const connectDB = async () => {
    await mongoose.connect(URI), {
        useUnifiedTopology: true,
        useNewUrlParser: true
    };
    console.log('MongoDB connected');
};

module.exports = connectDB;