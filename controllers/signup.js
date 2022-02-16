//requiring all modules
const express = require('express')
const register = require('../model/register')
// const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

// const generateToken = require('../helpers/userHelper')
const { handleErrors, generateToken } = require("../helpers/userHelper");

const{authUser, getUser, logout} = require('../middleware/authUser')

//signup

const signup = async (req, res) =>{
    const{fullName, email, password} = req.body
try {
   
    
    const newUser = new register({fullName, email, password})
     
    const User = await newUser.save()

    if(User){
       //using the token
       const token = generateToken(User._id) 

       //set cookies
       res.cookie('jwt', token, {maxAge: 3 * 24 * 60 * 60, httpOnly:true})

       //send our data
       res.status(201).json({User})
    }

} catch (error) {
    //declaring a variable and assigning it to the handle errors 
    //we had it the helper folder
     const errors = handleErrors(error);
    console.log(errors)
    res.json({errors});
}
}
    



//login 
const login = async (req, res) =>{
    const{ email, password} = req.body
    
    try {

        const user = await register.findOne({email})

        console.log(user)

        //compare password and hash the one the user is entering and 
        //compare with the one in the database

        
        if(user){
            const isSame = await bcrypt.compare(password, user.password);
            //const isSame = await bcrypt.compare(password, user.password)

            console.log(isSame)

            if(isSame){
                //using the token
             const token = generateToken(user._id) 
      
             //set cookies
             res.cookie('jwt', token, {maxAge: 7 * 24 * 60 * 60, httpOnly:true})  
              
             res.status(201).json({user})  
            
            }else{
                res.json({error: "Password Incorrect"})
            }

            //send our data
       
        }else{
            res.json({error: "Email not found, Signup"})
        }

        
    } catch (error) {
        //declaring a variable and assigning it to the handle errors 
    //we had it the helper folder
     const errors = handleErrors(error);
     console.log(errors)
     res.json({errors});
    }
}



module.exports = {
    signup,
     login

}