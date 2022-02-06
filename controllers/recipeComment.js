
//requiring modules

const mongoose = require('mongoose')
const multer = require('multer')
const recipeR = require('../routes/recipeR')
const recipe = require('../model/recipe')
const Comment = require('../model/comment')
const express = require('express')




//Saving comments to the database
const saveCom = (req, res) =>{
    const id = req.params.recipeId

    console.log(id)

    const comments = new Comment(req.body)
    comments.save().then(results =>{
        if(results)
        res.redirect(`/get/${id}`)
    })
    console.log(comments)
}


//get

const findRec = (req, res) =>{
    recipe.findById(req.params.id).then(result =>{
        if(result){
            console.log(result.id)

            Comment.find({'recipe_id':result.id}).then(doc =>{
                console.log(doc)
                // res.send(result)
                res.render('details', 
                {title: "Details",
                recipeData: result,
                review:doc,
                
            })
            })
            
        }
    })
}










const get = (req, res) =>{
            Comment.find({"recipe_id": req.params.id}).then(doc =>{
                console.log(Comment)
                res.send(doc)
                // res.render('details', 
                // {title: "Details",
                // recipeData: result,
                // review:success,
                
            })
            
            
            // })
            
        }

// finding the most likes
const mostLikes = (req, res) =>{
    recipe.find().then(result =>{
        if(result){
            console.log(result)

            Comment.find({ "rating1": 4}).then(doc =>{
                console.log(doc)
                // res.send(result)
                res.render('popular', 
                {title: "popular",
                recipeData: result,
                review:doc,
                
            })
            })
            
        }
    }) 
                
        }
    



module.exports = {
    saveCom,
    get,
   findRec,
   mostLikes
}