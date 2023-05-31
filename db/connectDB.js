import mongoose from "mongoose";
const connectDB=async(req,res)=>{
    try
    {
        await mongoose.connect("mongodb://localhost:27017/GamesDataBase1")
        console.log("connected successfully");
    }
    catch(err)
    {
        console.log(err)
    }


}
export default connectDB