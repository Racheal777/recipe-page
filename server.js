// requiring modules
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const allRoute = require('./routes/allRoute')
const recipeR = require('./routes/recipeR')

const PORT = process.env.PORT || 9000

const app = express()


//connecting to the database



    mongoose.connect(process.env.mongoUri, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }).then((results) => {
         console.log('Mongo Database is connected')
    }).catch((err) => {
        console.log(err)
    })

//setting the engine to ejs
app.set("view engine", "ejs")

//serving public files
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//using the module
app.use(allRoute)
app.use(recipeR)




app.listen(PORT, () => console.log(`Server is connected ${PORT}`))
