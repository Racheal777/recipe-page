const mongoose = require('mongoose')
const multer = require('multer')
const recipe = require('../model/recipe')
const recipeR = require('../routes/recipeR')
const register = require('../model/register')
const express = require('express')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')


const signup = (req, res) =>{
    const id = req.params.userId
    console.log(id)
    const{firstName, lastName, email, userName, password} = req.body
    // hashing password
    // const salt = await bcrypt.genSalt();
    // const hashedPassword = await bcrypt.hash(password, salt)

    const addUser = {
        firstName,
        lastName,
        email,
        userName,
        password ,
        avatar : req.file.originalname
    }

    const user = new register(addUser)
    user.save().then((result) => {
        
        if(result){
            // const alpha = result
         res.render('success', {title: "Success"})

        }
    }).catch((err) => {
        res.send(err.message)
    })
    console.log(user)
}


const fetchData = (req, res) =>{
    register.find()
    .sort('-1')
    .then((results) =>{
        if(results) res.render('chef', {title:"Chef", signup:results})
    }).catch((err) => {
        console.log(err)
    })
}

const fetchOne = (req, res) =>{
    register.findById(req.params.id)
    .then((results) =>{
        console.log(results.id)
        if(results) {

            const names = register._id
            console.log(names)
            recipe.find({"cookName":"yasira"}).then((success) =>{
            res.render('profile',
             {
                 title:"Chef Profile", 
                 info:results,
                 names:success
            })
        
        })
    }
        
    }).catch((err) => {
        console.log(err)
    })
}


//setting cookies
const cookies = (req, res) =>{
    res.cookie('admin', "Hellofirstcookie", {maxAge: 3*24*60*60, httpOnly:true})
    res.json({message : " Cookies has been set"})
}


//getting cookies
// const Getcookies = (req, res) =>{
//     res.cookie('admin', "Hellofirstcookie")
//     res.json({message : " Cookies has been set"})
// }


module.exports = {
    signup,
    fetchData,
    fetchOne,
    cookies,
}