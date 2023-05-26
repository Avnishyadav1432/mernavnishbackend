
const mongoose=require("mongoose");
mongoose.set("strictQuery", false);
const DB=process.env.DataBase;
mongoose.connect(DB,{useNewUrlParser:true,
    useUnifiedTopology:true
    },()=>{
        console.log("database connected");
    });