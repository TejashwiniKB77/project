const  mongoose = require("mongoose");
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://admin:admin1234@cluster0.ryune1s.mongodb.net/test123");
        console.log(`mongodb connected:${conn.connection.host}`);
    }
    catch(error){
        console.error("error connecting to mangodb:",error.message);
process.exit(1);
    }
};
module.exports = connectDB;