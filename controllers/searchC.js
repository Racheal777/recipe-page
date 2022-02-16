const mongoose = require('mongoose')
const multer = require('multer')
const recipeR = require('../routes/recipeR')
const recipe = require('../model/recipe')
const Comment = require('../model/comment')
const express = require('express')



//seaching the database using the index which is in the model
const SearchIt = (req, res) => {
    const search = req.params.tag

    console.log(search)

    recipe.find({$text: {$search: `${search}`, $caseSensitive:false }}).then(
        result => {
            if(result) 
            res.render('search', {title: "Search Results", searches:result})
            console.log(result)
        }).catch(err => {
            console.log(err)
        })
    
       
        
}

const findIt = (req, res) =>{
    const tag = req.params.tag

    recipe.find({recipeName: { $regex: 'k', $options: "i" } }, function(err, docs) { 
        res.render('search', {title: "Search Results", searches:docs}) 

    })

}

const search = (req, res) => {
    const tagg = req.params.tagg;
    console.log(tagg)

    recipe.find({$text: {$search: `${tagg}`, $caseSensitive:false}}).exec(function(
        err, result) {
            if(err) throw err
            if(result){
                console.log(result)
                res.render('search', {title: "Search Results", searches:result})
            }
        })
}


const searches = (req, res, next) =>{
    //find all recipes
    recipe.find().exec().then(results =>{

        //after grab the keys of the object with the query user enter
        if(Object.keys(req.query).length){

            //filter the results which is now in an array 
            //check if the search word is either in the recipe name,
            //cookname or category
            const render = results.filter(result => 
                result.recipeName.includes(req.query.search) || 
                result.cookName.includes(req.query.search) || 
                result.category.includes(req.query.search))

                console.log(render)

                //check if there is a query all
                //if there is one then you render the results
                if(render.length){
                    res.render('search', {title: "Home", recip: render})
                    next()
                }else{
                    res.render("notFound", {title:"Not Found"})
                }
               

        }else{
            res.json({message: "recipe not found"})
        }
    }).catch(err => {
        console.log(err)
    })
}




module.exports = {
   
    SearchIt,
    findIt,
    search,
    searches

}