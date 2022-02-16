const express = require('express')
const allControl = require('../controllers/allControl')




const router = express.Router()

//rendering files
// router.get('/', allControl.home)

router.get('/form', allControl.form)

router.get('/profile', allControl.profile )

router.get('/recipe', allControl.recipe)

router.get('/login', allControl.login)

router.get('/signup', allControl.signup)

router.get('/contact', allControl.contact)

router.get('/market', allControl.market)

router.get('/chef', allControl.chef)






module.exports = router;