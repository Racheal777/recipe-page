const express = require('express')
const categoryCon = require('../controllers/categoryCon')
const multer = require('multer')
const recipe = require('../model/recipe')


const router = express.Router()



router.get('/breakfast', categoryCon.breakfast )

router.get('/snacks', categoryCon.snacks )

router.get('/dessert', categoryCon.dessert )

router.get('/lunch', categoryCon.lunch )

router.get('/supper', categoryCon.supper )

router.get('/drink', categoryCon.drink )






module.exports = router;
