//requiring modules

const mongoose = require('mongoose')
const multer = require('multer')
const recipeR = require('../routes/recipeR')
const recipe = require('../model/recipe')
const comment = require('../model/comment')
const express = require('express')




// Kitten.findOne(
//     // query
//     {color: "white", name: "Dr. Miffles", age: 1},

//     // Only return an object with the "name" and "owner" fields. "_id" 
//     // is included by default, so you'll need to remove it if you don't want it.
//     {name: true, owner: true},

//     // callback function
//     (err, kitten) => {
//         if (err) return res.status(200).send(err)
//         return res.status(200).send(kitten)
//     }
// );

//fetching the Categories from the database
//reversing the data to show the most recent
// const getCategory =  (req, res) => {
//     recipe.findOne({category:"breakfast"}).then((results) =>{
//         if(results) res.render('check', {title:  "Breakfast", info:results})
//     }).catch((err) =>{
//         console.log(err)
//     })
    
// }


const breakfast = (req, res) =>{
    recipe.find({category: "breakfast" }).then((results) =>{
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