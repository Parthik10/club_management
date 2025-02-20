const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connnectDb = async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection success to DB")
    }catch(error){
        console.log("connection failed to DB")
        process.exit(0);
    }
}
module.exports = connnectDb;