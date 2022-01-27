//requiring modules
const allRoute = require('../routes/allRoute')
const express = require('express')


//callbacks for the route activity
const home =  (req, res) => {
    res.render('index', {title : "HomePage"})
}

const form =  (req, res) => {
    res.render('forms', {title : "Recipe Form"})
}

const profile = (req, res) => {
    res.render('profile', {title : "Profile"})
}

const recipe =  (req, res) => {
    res.render('recipe', {title : "Recipe"})
}

const login =  (req, res) => {
    res.render('login', {title : "Login"})
}

const signup =  (req, res) => {
    res.render('signup', {title : "Register"})
}



//exporting module
module.exports = {
    home,
    form,
    profile,
    recipe,
    login,
    signup

}