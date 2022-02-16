//requiring modules
const express = require('express')
const registerR = require('../controllers/signup')
const{authUser,getUser } = require('../middleware/authUser')

const router = express.Router()

//rendering files



 router.post('/signup', registerR.signup)

router.post('/login', registerR.login)





module.exports = router