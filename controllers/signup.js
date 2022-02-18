//requiring all modules
const express = require('express')
const register = require('../model/register')
const Avatar = require('../model/avatar')
// const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

// const generateToken = require('../helpers/userHelper')
const { handleErrors, generateToken } = require("../helpers/userHelper");

const{authUser, getUser, logout} = require('../middleware/authUser');
const { chef } = require('./allControl');

//signup

const signup = async (req, res) =>{
    const{fullName,userName, email, password} = req.body
try {
   
    
    const newUser = new register({fullName, email,userName, password})
     
    const User = await newUser.save()
    console.log(User)

    if(User){
       //using the token
       const token = generateToken(User._id) 

       //set cookies
       res.cookie('jwt', token, {maxAge: 3 * 24 * 60 * 60 * 1000, httpOnly:true})

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
             res.cookie('jwt', token, {maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly:true})  
              
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

const loggingOut = (req, res) =>{
  //set cookies
  res.cookie('jwt', '', {maxAge: 0, httpOnly:true})
      res.redirect('/')
  
    
              
}


//get all users

const allUsers = (req, res) =>{
    register.find().exec().then(results => {
        res.render('chef', {title:"Chefs", chefs: results})
        console.log(chef)
    }).catch(err => {
        console.log(err)
    })
}


//getting one user
const oneUser = (req, res) =>{
    register.findById(req.params.id).exec().then(results => {
        res.render('profile', {title:"Profile", info: results})
        console.log(chef)
    }).catch(err => {
        console.log(err)
    })
}


module.exports = {
    signup,
     login,
     loggingOut,
     allUsers,
     oneUser,
     

}