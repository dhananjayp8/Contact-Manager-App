const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModel");
//@desc Create New contact
//@route POST /api/contacts
//@access public


const createContacts=asyncHandler(async(req,res)=>{
    console.log("The requesy body is :",req.body);
    const {name,email,phone}=req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact=await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts=asyncHandler(async(req,res)=>{
    const contacts=await Contact.find()
    res.status(201).json(contacts);
});
//@desc Create New contact
//@route POST /api/contacts
//@access public
// updata,delete -200

const getContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }else{
        res.status(200).json(contact);
    }
});

const updateContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updateContact);
});

const deleteContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
});
module.exports={getContacts,createContacts,getContact,updateContact,deleteContact};

