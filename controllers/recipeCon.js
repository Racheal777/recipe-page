//requiring modules

const mongoose = require('mongoose')
const multer = require('multer')
const recipeR = require('../routes/recipeR')
const recipe = require('../model/recipe')
const comment = require('../model/comment')
const express = require('express')


//callbacks for the route activity
const saveData =  (req, res) => {

    //destructuring the objects in the model
    const{recipeName, cookName, email, level, category, time,
        ingredients, instruction} = req.body;

        //declaring a variable to pass the object
    const addRecipe = {
        recipeName, 
        cookName, 
        email,
        level, 
        category, 
        time,
        ingredients,
        instruction,
        
        foodImage : req.file.originalname
    }

    //creating an instance of the schema
    const recipes = new recipe(addRecipe)

    // console.log(level)
    // console.log(ingredients)
    //saving data to the database
    recipes.save().then((results) => {
        if(results)res.render('success', {title: "Success"})
    }).catch((err) =>{
        console.log(err)
    })  
}



//finding one id
const getOneData =  (req, res) => {
    recipe.findById(req.params.id).then((results) => {
        if(results) {
            
            res.render("details", {title: "Recipes", recipeData : results})
        }
    }).catch((err) =>{
        console.log(err)
    })
    // res.render('forms', {title : "Recipe Form"})
}




//fetching the data from the database
//reversing the data to show the most recent
const getData =  (req, res) => {
    recipe.find().then((results) => {
        if(results) {
            const reversed = results.reverse()
            res.render("index", {title: "Home", recipes : reversed})
        }
    }).catch((err) =>{
        console.log(err)
    })
    // res.render('forms', {title : "Recipe Form"})
}












//saving the comments
const saveComment =  (req, res) => {

    //destructuring the objects in the model
    const{name, message, rating1} = req.body;

        //declaring a variable to pass the object
    const addComment = {
        name,
        message,
        rating1   
    }

    //creating an instance of the schema
    const comments = new comment(addComment)
    //saving data to the database
    comments.save().then((results) => {
        if(results)res.render("success", {title: "Recipes"})
    }).catch((err) =>{
        console.log(err)
    })  
}


//fetching the COMMENTS from the database
//reversing the data to show the most recent
const getComment =  (req, res) => {
    comment.find().then((results) => {
        if(results) {
            // const reversed = results.reverse()
            res.render("index", {title: "details", recipes : results})
        }
    }).catch((err) =>{
        console.log(err)
    })
    // res.render('forms', {title : "Recipe Form"})
}

//fetching the COMMENTS from the database
//reversing the data to show the most recent
const getOneComment =  (req, res) => {
    comment.findById(req.params.id).then((results) => {
        if(results) {
            // const reversed = results.reverse()
            res.render("index", {title: "details", recipeData : results})
        }
    }).catch((err) =>{
        console.log(err)
    })
    // res.render('forms', {title : "Recipe Form"})
}










//exporting module
module.exports = {
    saveData,
    getData,
    getOneData,
    saveComment,
    getComment,
    getOneComment
   

}