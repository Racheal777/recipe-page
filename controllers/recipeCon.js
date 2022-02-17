//requiring modules

const mongoose = require('mongoose')
const multer = require('multer')
const recipeR = require('../routes/recipeR')
const recipe = require('../model/recipe')
// const comment = require('../model/comment')
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

    //saving data to the database
    recipes.save().then(results => {
            if(results)
            
            res.render('success', {title: "Success", recipe,})
            
    }).catch(err =>{
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

//fetching the data from the database
//reversing the data to show the most recent
const getAll =  (req, res) => {
    recipe.find().then((results) => {
        if(results) {
            const reversed = results.reverse()
            res.render("home", {title: "Home", recipes : reversed})
        }
    }).catch((err) =>{
        console.log(err)
    })
    // res.render('forms', {title : "Recipe Form"})
}





//fetching the All data from the database
//reversing the data to show the most recent
const getAllDatas =  (req, res) => {
    recipe.find().then((results) => {
        if(results) {
            const reversed = results.reverse()
            res.render("allRec", {title: "All Recipes", recipes : reversed})
            // res.send(results)
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
    getAll,
    getAllDatas,
    getOneData,
    
    
   

}