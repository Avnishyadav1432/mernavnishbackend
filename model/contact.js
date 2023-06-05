const jwt=require("jsonwebtoken")
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username:{type:String,
         required:true},
    email:{
        type:String,
        required:true},

   
        message:{
            type:String,
            required:true
        }
               
    
})

const Contact= mongoose.model('Contact',userSchema);
//hum apne Collection ko export kra denge dusre file me use krne ke liye***
module.exports=Contact;