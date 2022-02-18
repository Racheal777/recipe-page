
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

//comment with most likes

const popular = (req, res) =>{
    

        Comment.find().exec().then(result =>{
            
            if(result){

           
            recipe.findById(req.params.id).exec().then(results =>{
                

                const pop =  result.filter(result => result.rating1 > 3)
         
                res.render('popular', {title: "HomePage", pops:pop, })
                // console.log(pop)
                // console.log(resultss)
            })

        }
         }).catch(err => {
             console.log(err)
         })   
}

//finding popular
const findPopular = (req, res) =>{
    recipe.find({"$comment": req.params.id}).then(result =>{
        if(result){
            console.log(result.id)
            const comm = result

            Comment.find({'recipe_id':result._id}).then(doc =>{
                const pop = doc.filter(docs => docs.rating1 > 3)
                // console.log(doc)
                console.log(pop)
                // console.log(result)
                // res.send(result)
                res.render('popular', 
                {title: "Popular Recipes",
                pops: pop,
                recip : result    
            })
            })
            
        }
    })
}



module.exports = {
    saveCom,
    get,
   findRec,
   popular,
   findPopular
//    mostLikes
}