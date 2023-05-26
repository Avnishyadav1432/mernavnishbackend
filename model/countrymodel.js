const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    countryT:[]
})
const country= mongoose.model('country',userSchema);
module.exports=country;