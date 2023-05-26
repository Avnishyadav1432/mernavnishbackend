
const mongoose=require("mongoose");

const DB=process.env.DataBase;
mongoose.connect(DB).then(()=>{
        console.log("database connected");
    }).catch((err)=>{
console.log(err);
    })
