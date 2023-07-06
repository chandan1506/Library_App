const express = require("express");
const userRouter = express.Router();
const {register,login} = require("../controller/user.controller")


              //<----------------to register user--------------->
userRouter.post("/register",register)
               //<----------------to login user--------------->
userRouter.post("/login",login)  



module.exports = {userRouter}