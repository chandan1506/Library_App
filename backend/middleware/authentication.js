const jwt = require("jsonwebtoken")
require("dotenv").config()

const authentication = (req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        res.status(401).json("login first")
        }else{
        try {
            const decode = jwt.verify(token,process.env.key)
            if(decode){
             const user_ID = decode.userID
                 req.body.userID = user_ID;

              const userRole = decode.role;
            //   console.log(userRole)
              req.body.userrole = userRole
              next()
             }else{
                res.status(401).json("plz login")
             }
        } catch (error) {
            res.status(500).json({"err":error.message})
        }
    }
        
    }





module.exports = {authentication}