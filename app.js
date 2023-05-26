const express = require("express");
const app = express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cookieParser = require('cookie-parser');
dotenv.config({path:'./.env'})

const port=process.env.port || 6060;
require('./database/conn');
app.use(express.json());
const cors=require('cors');

app.use(cors());
app.use(cookieParser());
app.use(require('./routes/route'));
const errorMiddleware = require("./middleware/error");
const errorhander = require("./utils/errorhander");
const connection=require("./database/conn");
const bodyParser = require("body-parser");
const country=require('./model/countrymodel')
app.use(bodyParser.urlencoded({ extended: false }));
// const data=async()=>{
//   const data1=await country({
//     countryT:["India","Pakistan","USA","China"]
    
//   })
//   await data1.save();
// }
// data();

app.listen(port, () => {
  console.log(`server running port is ${port}`);
});
