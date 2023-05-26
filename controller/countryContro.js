const country=require("../model/countrymodel");
exports.countryRoute=async(req,res)=>{
    const countryT=req.body.countryT;
    try{
        const data = new country({countryT });
        const userRegister= await data.save();
        if(userRegister){
          res.status(201).json({message:"submited success"});
        }
    }catch(err){
        console.log(err)
    }
}
exports.countryGet=async(req,res)=>{
try{
const data=await country.find();
res.status(201).json(data);
}catch(err){
    console.log("some error fetch country")
}
}
