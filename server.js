// requiring modules
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const allRoute = require('./routes/allRoute')
const recipeR = require('./routes/recipeR')
const register = require('./routes/signups')
const categoryRoute = require('./routes/categoryRout')
const cors = require('cors')
const cookieParser = require('cookie-parser')



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
// app.use(cors)
app.use(cors())
app.use(cookieParser()) //cookies

//using the module
app.use(allRoute)
app.use(recipeR)
app.use(register)
app.use(categoryRoute)



app.listen(PORT, () => console.log(`Server is connected ${PORT}`))
