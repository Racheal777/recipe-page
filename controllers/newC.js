const mongoose = require('mongoose')
const multer = require('multer')

const recipe = require('../model/recipe')
const Comment = require('../model/comment')
const express = require('express')


const sign = (req, res) =>{
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
    recipes.save().then((result) => {
     
        const comment = new Comment({
            name: req.body.name,
          message: req.body.age,
          rating1 : req.body.rating1,
          recipe: [recipes._id],
        })
        comment.save().then((doc) => {
            res.render( "index", { title: "homepage", comment, recipes });
          });
    }) 

    .catch((err) => {
        console.log(err)
        res.json({ error: err.message });
      });
}


const fetch = (req, res) => {
    const { id } = req.params;
    recipe.findById(id)
    
          .populate("comment")
          .exec((err, doc) => {
            if (err) throw err;
            res.render('index', {title: "home", recipes: doc})

            console.log(doc)

          });  
}


const create = async (req, res) => {

    console.log(req.params);
    user = req.params;
    id = user.id;
    const { name, message, rating1} = req.body;
    const post = await Comment.create({
        name,
        message,
        rating1,
        user:id
    });
    await post.save();

    const userById = await recipe.findById(id);

    userById.comment.push(post);
    await userById.save();
    console.log(userById)
    return res.send(userById);
    
}


const userByPost = async (req,res)=>{
    const { id } = req.params;
    const userByPost = await Comment.findById(id).populate('comment');
    res.send(userByPost);
}



//recipe

const recip = async (req, res) =>{
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
    const user = await recipe.create(addRecipe)

    return res.send(user)
}

const findd = async (req, res) => {
    const user = await recipe.find()
    return res.send(user)
}


const findOne = async (req, res) => {
   const { id } = req.params;
   const user = await recipe.findById(id).populate('comment');

    res.send(user.comment);
}



  module.exports = {
      sign,
      fetch,
      create,
      userByPost,
      recip,
      findd,
      findOne

  }