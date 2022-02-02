//requiring modules

const mongoose = require('mongoose')
const multer = require('multer')
const recipeR = require('../routes/recipeR')
const recipe = require('../model/recipe')

const express = require('express')


//fetching data based on categories
const breakfast = (req, res) =>{
    recipe.find({category: "breakfast" }).then((results) =>{
        console.log(results)
        if(results) res.render("check",{title:"Breakfast", docs:results} );
    }).catch((err) =>{
        if (err){
            console.log(err)
        }
        
    })
        
    };




const snacks = (req, res) =>{
    recipe.find({category: "snack" }).then((results) =>{
        if(results) res.render("check",{title:"snack", docs:results} );
    }).catch((err) =>{
        if (err){
            console.log(err)
        }
    })
        
    };

    const dessert = (req, res) =>{
        recipe.find({category: "dessert" }).then((results) =>{
            if(results) res.render("check",{title:"Dessert", docs:results} );
        }).catch((err) =>{
            if (err){
                console.log(err)
            }
        })
            
        };
    
        const lunch = (req, res) =>{
            recipe.find({category: "lunch" }).then((results) =>{
                if(results) res.render("check",{title:"Lunch", docs:results} );
            }).catch((err) =>{
                if (err){
                    console.log(err)
                }
            })
                
            };

            const supper = (req, res) =>{
                recipe.find({category: "supper" }).then((results) =>{
                    if(results) res.render("check",{title:"Supper", docs:results} );
                }).catch((err) =>{
                    if (err){
                        console.log(err)
                    }
                })
                    
                };
    

                const drink = (req, res) =>{
                    recipe.find({category: "drink" }).then((results) =>{
                        if(results) res.render("check",{title:"Drinks", docs:results} );
                    }).catch((err) =>{
                        if (err){
                            console.log(err)
                        }
                    })
                        
                    };

                    const name= (req, res) =>{
                        recipe.find({cookName: "racheal" }).then((results) =>{
                            if(results) res.render("profile",{title:"Profile", names:results} );
                        }).catch((err) =>{
                            if (err){
                                console.log(err)
                            }
                        })
                            
                        };
        

//exporting module
module.exports = {
    breakfast,
    snacks,
    dessert,
    supper,
    drink,
    lunch
    
   

}