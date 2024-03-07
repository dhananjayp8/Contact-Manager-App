const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please add the contact name"],
    },
    email:{
        type:String,
        require:[true,"Please add the conatct email address"],
    },
    phone:{
        type:String,
        require:[true,"Please add the contact phone number"],
    }
    
},{
    timestamps:true,
  }
);

module.exports=mongoose.model("Contact",contactSchema);