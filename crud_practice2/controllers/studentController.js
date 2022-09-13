import studentModel from "../models/studentSchema.js";
class studentController
{
    //createDoc
    static createDoc=async(req,res)=>
    {
        console.log(req.body)
        try
        {
            const doc=new studentModel({
            name:req.body.username,
            age:req.body.userage,
            game:req.body.usergame,
            rating:req.body.userrating
            })

            //saving in mongodb
            const result=await doc.save()
            console.log(result)
            
            res.redirect("/student/user");
        }
        catch(err)
        {
            console.log(err)
        }
    }

    //Displaying all the data
    static getAllDoc=async(req,res)=>
    {
        try
        {
            const result=await studentModel.find()
            //console.log(result)
            res.render("index.ejs",{data:result})
        }
        catch(err)
        {
            console.log(err)
        }
    }

    //Edit Doc
    static editDoc=async(req,res)=>
    {
        try
        {
            const result = await studentModel.findById(req.params.id)
            console.log(result)
            res.render("edit.ejs",{data:result})
        }
        catch(err)
        {
            console.log(err)
        }
    }

    //update doc
    static updateDocById=async(req,res)=>
    {
        console.log(req.params.id)
        console.log(req.body)
        try
        {
            const result=await studentModel.findByIdAndUpdate(req.params.id,req.body);
            console.log(result)

            res.redirect("/student/user")
        }
        catch(err)
        {
            console.log(err)
        }
    }

    //Delete Doc
    static deleteDocById=async(req,res)=>
    {
        try
        {
            const result= await studentModel.findByIdAndDelete(req.params.id);
            console.log(result)
            res.redirect("/student/user")
        }
        catch(err)
        {
            console.log(err)
        }
    }
}
export default studentController