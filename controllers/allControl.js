//requiring modules
const allRoute = require('../routes/allRoute')
const express = require('express')


//callbacks for the route activity



const form =  (req, res) => {
    res.render('forms', {title :"Recipe Form"})
}

const profile = (req, res) => {
    res.render('profile', {title :"Profile"})
}

const recipe =  (req, res) => {
    res.render('recipe', {title :"Recipe"})
}

const login =  (req, res) => {
    res.render('login', {title :"Login"})
}

const signup =  (req, res) => {
    res.render('signup', {title :"Register"})
}

const contact =  (req, res) => {
    res.render('call', {title :"Contact Us"})
}

const market =  (req, res) => {
    res.render('market', {title :"Market"})
}

const chef =  (req, res) => {
    res.render('chef', {title :"Chef"})
}



//exporting module
module.exports = {
      
    form,
    profile,
    recipe,
    login,
    signup,
    contact,
    market,
    chef,
    

}