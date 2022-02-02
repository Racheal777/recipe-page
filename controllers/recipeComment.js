
//requiring modules

const mongoose = require('mongoose')
const multer = require('multer')
const recipeR = require('../routes/recipeR')
const recipe = require('../model/recipe')
const comment = require('../model/comment')
const express = require('express')
















// //fetching the COMMENTS from the database
// //reversing the data to show the most recent
// const getOneComment =  (req, res) => {
//     comment.findById(req.params.id).then((results) => {
//         if(results) {
//             // const reversed = results.reverse()
//             res.render("index", {title: "details", recipeData : results})
//         }
//     }).catch((err) =>{
//         console.log(err)
//     })
//     // res.render('forms', {title : "Recipe Form"})
// }



const saveMe = (req, res) => {
    const recipes = new recipe({
        recipeName : req.body.recipeName, 
        cookName : req.body.cookName, 
        email : req.body.email,
        level : req.body.level, 
        category : req.body.category, 
        time : req.body.time,
        ingredients : req.body.ingredients,
        instruction: req.body.instruction,
        foodImage : req.file.originalname
    })
    recipes.save().then(results => {

        const comments = new comment({
            name: req.body.name,
            message: req.body.message,
            rating1: req.body.rating1,
            recipy : [recipes._id]
        })
        console.log(req.body)

        comments.save().then(doc => {
            res.render('success', {title: "Success",comments, recipes})

        })
    }).catch(err => {
        res.json({error: err.message})
    })
}

const get = (req, res) => {
    comment.find().populate('recipy').exec((err, doc) => {
        if(err) throw err
        res.send(doc)
    })
}


module.exports = {
    // saveComment,
    // getComment,
    get,
    saveMe,
}