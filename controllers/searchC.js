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




// recipe.find({recipeName: { $regex: "k", $options: "i" } }, function(err, docs) {
//     console.log("Partial Search Begins");
//     console.log(docs);
//     });




module.exports = {
   
    SearchIt,
    findIt
}