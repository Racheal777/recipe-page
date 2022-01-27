const express = require('express')
const recipeCon = require('../controllers/recipeCon')


const router = express.Router()

//rendering files
router.get('/', )

router.post('/post', recipeCon.saveData)

router.get('/profile', )

router.get('/recipe', )


module.exports = router;
