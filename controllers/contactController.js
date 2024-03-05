
const createContact=(req,res)=>{
    res.status(201).json({message:"Create contact"});
};

const getContact=(req,res)=>{
    res.status(201).json({message:`Get contact for ${req.params.id}`});
};

const updateContact=(req,res)=>{
    res.status(201).json({message:"Update contact"});
}

const deleteContact=(req,res)=>{
    res.status(201).json({message:"git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dhananjayp8/Contact-Manager-App.git
git push -u origin main"})
}
module.exports={getContact};

