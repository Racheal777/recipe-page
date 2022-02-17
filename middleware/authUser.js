const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const register = require('../model/register')



//protecting the route
module.exports.authUser = (req, res, next) =>{
    //assigning a variable to the cookie generated
      const token = req.cookies.jwt
  
      //if token is generated, compare with the one 
      //in the system using the private key
    
      if(token){
        jwt.verify(token, process.env.privateKey, (err, decoded) =>{
    
          if(err){
              
            console.log(err)
            res.redirect('/login')
          }else{
            console.log(decoded)
            next()
          }
        })
        
      //if no token then it should redirect the person to the login page
      }else{
        res.redirect('/login')
      }
    }


//authenticate user

module.exports.getUser =  (req, res, next)=>{

    const token = req.cookies.jwt

    //if token is generated, verify the user
    //after is login, find the persons details using the decode.id which 
    //contains the id
    if(token){
        jwt.verify(token, process.env.privateKey, async (err, decode) =>{
            if(err){
                console.log(err)
                res.locals.err = null
                next()

            }else{
                console.log(decode)
               const user = await register.findById(decode.id)
               res.locals.user = user

               next()
            }

        })
    }else{
        res.locals.err = null
        next()

    }
}


