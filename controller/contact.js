
const Contact=require('../model/contact')

exports.contact=async(req,res)=>{
    //object destructureing*******
    const { username, email,message } = req.body;
    console.log(username)
    if (!username || !email || !message) {
      return res.status(422).json({ error: "plz filled the field properly" });
    }
    try{
       const userExist=await Contact.findOne({ email: email })
      
       if(userExist){
        return res.status(208).json({ error: "Email already Exist" });
       }
      else{
        console.log(username,email)
       const contact = new Contact({ username, email, message });
      const userRegister= await contact.save();
      if(userRegister){
        res.status(200).json({ message: "user registered successfully " });
      }
      // sendToken(userRegister, 201, res);
    }
    }catch(err){
        console.log(err);
    }
}

exports.getcontact=async(req,res)=>{
    
    const data=await Contact.find();
   res.status(200).json({
    success: true,
    data,
  });
  }