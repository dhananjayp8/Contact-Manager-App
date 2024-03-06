

//@desc Create New contact
//@route POST /api/contacts
//@access public


const createContacts=(req,res)=>{
    console.log("The requesy body is :",req.body);
    const {name,email,phone}=req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({message:"Create contact"});
};

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts=(req,res)=>{
    res.status(201).json({message:"Get contact for all"});
};
//@desc Create New contact
//@route POST /api/contacts
//@access public
// updata,delete -200

const getContact=(req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
}

const updateContact=(req,res)=>{
    res.status(200).json({message:`Update contact for ${req.params.id}`});
}

const deleteContact=(req,res)=>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
}
module.exports={getContacts,createContacts,getContact,updateContact,deleteContact};

