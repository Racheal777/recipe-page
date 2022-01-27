//requiring modules

const mongoose = require('mongoose')
const recipe = require('../model/recipe')
const express = require('express')


//callbacks for the route activity
const saveData =  (req, res) => {

    //creating an instance of the schema
    const recipes = new recipe(req.body)

    //saving data to the database
    recipes.save().then((results) => {
        if(results)res.render('success')
    }).catch((err) =>{
        console.log(err)
    })

    
}

const form =  (req, res) => {
    res.render('forms', {title : "Recipe Form"})
}

const profile = (req, res) => {
    res.render('profile', {title : "Profile"})
}





//exporting module
module.exports = {
    saveData,
   

}