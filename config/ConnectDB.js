const mongoose = require('mongoose');
const config = require('config');

const connectDB = _=>{
    mongoose.connect(config.get('MONGO_URI'))
    .then(_=>console.log("mongodb connected"))
    .catch((err)=> console.error("connection failed",err));
}

module.exports = connectDB;