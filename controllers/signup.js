const mongoose = require('mongoose')
const multer = require('multer')
const recipe = require('../model/recipe')
const recipeR = require('../routes/recipeR')
const register = require('../model/register')
const express = require('express')


const signup = (req, res) =>{
    const{firstName, lastName, email, userName, password} = req.body

    const addUser = {
        firstName,
        lastName,
        email,
        userName,
        password,
        avatar : req.file.originalname
    }

    const user = new register(addUser)
    user.save().then((result) => {
        if(result){
            // const alpha = result
         res.render('success')

        }
    }).catch((err) => {
        res.send(err.message)
    })
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

        if(results) {

            console.log(results.cookName)
            recipe.find({cookName: results.cookName }).then((success) =>{
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





module.exports = {
    signup,
    fetchData,
    fetchOne
}