const jwt=require("jsonwebtoken")
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username:{type:String,
         required:true},
    email:{
        type:String,
        required:true},

   
        password:{
            type:String,
            required:true
        },
        nationality:{
            type:String,
            required:true
        },
           role:{
            type:String,
            
            default:"user"
           },

                
            
    
})
//we are generateing token************
// JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    // expiresIn: process.env.JWT_EXPIRE,
  });
};

const User= mongoose.model('USER',userSchema);
//hum apne Collection ko export kra denge dusre file me use krne ke liye***
module.exports=User;