import express from "express"
import connectDB from "./db/connectDB.js"
import {join} from "path"
import router from "./routes/web.js"
const app=express()
const port=process.env.PORT||"3000"

//function calling
connectDB()

//Middleware is created when we require "req.body"
app.use(express.urlencoded({extended:false}))

//static files
app.use("/student/user",express.static(join(process.cwd(),"public")))
app.use("/student/edit",express.static(join(process.cwd(),"public")))

//Load routes
app.use("/student",router)

app.listen(port,()=>{
    console.log("listening on port "+port)
})