import mongoose from "mongoose";
//creating a schema
const studentSchema=new mongoose.Schema({
name:{type:String, required:true},
age:{type:Number, required:true},
game:{type:String, required:true},
rating:{type:Number, required:true,min:50,max:100},

})
//saving schema
//Here "user" is name of the collection
const studentModel=mongoose.model("user",studentSchema)

export default studentModel