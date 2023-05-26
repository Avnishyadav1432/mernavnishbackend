const jwt=require('jsonwebtoken');
const express = require("express");
const User=require("../model/user");
const sendToken = require("../utils/jwtToken");
exports.signup=async(req,res)=>{
    //object destructureing*******
    const { username, email, password,nationality } = req.body;
   
    if (!username || !email || !password ||!nationality) {
      return res.status(422).json({ error: "plz filled the field properly" });
    }
    try{
       const userExist=await User.findOne({ email: email })
       if(userExist){
        return res.status(208).json({ error: "Email already Exist" });
       }
      else{
        console.log(username,email)
       const user = new User({ username, email, password, nationality });
      const userRegister= await user.save();
      if(userRegister){
        res.status(200).json({ message: "user registered successfully " });
      }
      // sendToken(userRegister, 201, res);
    }
    }catch(err){
        console.log(err);
    }
}
  //Login Page***********
  exports.signin=async(req,res)=>{
    try{
        // let token;
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"plz fill the data"});
        }
        //findone check krega ki database me email ye wala h ki nhi********
        const userLogin=await User.findOne({email,password});
       console.log(userLogin)
        if(userLogin){
             //JWT Token Use**********
              sendToken(userLogin, 200, res);
            // res.json({message:"login successfull"});
        }else{
            console.log("invalid detail")
            res.status(400).json({error:"login envalid"});
        }
      
    } catch(err){
        console.log(err);
    }
  }

  //Get All Users****************************

  exports.getSignup=async(req,res)=>{
    
    const getSignUp=await User.find();
   res.status(200).json({
    success: true,
    getSignUp,
  });
  }

  // Get single user (admin)
exports.getSingleUser = async (req, res, next) => {
  const id=req.params.id;
  // console.log(id)
  const user = await User.findById(id);

  if (!user) {
    return res.json(`User does not exist with Id: ${id}`)
    
  }

  res.status(200).json({
    success: true,
    user,
  });
};

// update User Role -- Admin
exports.updateUserRole = async (req, res, next) => {
  const newUserData = {
    username: req.body.username,
    email: req.body.email,

    role: req.body.role,
  };

  await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
};

// Delete User --Admin
exports.deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
};

  exports.logout=async(req,res,next)=>{
    res.cookie("token",null,{
      expires:new Date(Date.now()),
      httpOnly:true
    })
res.status(200).json({
  success:true,
  message:"Loged Out"
})
  }

 
// module.exports={signup,signin,getSignup,logout}