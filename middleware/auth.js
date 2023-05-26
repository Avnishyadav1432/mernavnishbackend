const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.isAuthenticatedUser =async (req, res, next) => {
  const  {token}  = req.cookies;

  if (!token) {
    console.log("hiiiiiiiiiii")
    return res.status(401).json("Please Login to access this resource");
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
};

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json(
          `Role: ${req.user.role} is not allowed to access this resouce `)
    
    }

    next();
  };
};
