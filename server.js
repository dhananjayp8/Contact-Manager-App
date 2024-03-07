const express=require("express");
const dotenv=require("dotenv").config();
const connectDb=require("./config/dbConnection")
connectDb();
const app=express();
const contactRouter=require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT||8000;

// app.get("api/contacts",(req,res)=>{
//     res.status(200).json({message:"Get all contacts"});
// })
// app.get("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"Get all contacts"});
// });
app.use(express.json());
app.use("/api/contacts",require('./routes/contactRoutes'))
app.use("/api/users",require('./routes/userRoutes'))

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server started at ${port}`);
});
