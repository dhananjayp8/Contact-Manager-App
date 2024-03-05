const express=require("express");
const dotenv=require("dotenv").config();
const app=express();
const contactRouter=require("./routes/contactRoutes");
const port = process.env.PORT||8000;

// app.get("api/contacts",(req,res)=>{
//     res.status(200).json({message:"Get all contacts"});
// })
// app.get("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"Get all contacts"});
// });
app.use("/api/contacts",require('./routes/contactRoutes'))

app.listen(port,()=>{
    console.log(`Server started at ${port}`);
});
