const mongoose = require('mongoose');
const URI = 
"mongodb+srv://john_db:qwerty123456@cluster0.iz5qvn2.mongodb.net/?appName=Cluster0";

const connectDB = async () => {
    await mongoose.connect(URI), {
        useUnifiedTopology: true,
        useNewUrlParser: true
    };
    console.log('MongoDB connected');
};

module.exports = connectDB;