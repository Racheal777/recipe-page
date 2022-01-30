const express = require('express')
const signup = require('../controllers/signup')
const multer = require('multer')


const router = express.Router()

//saving the image to the public folder
//cb is a callback which accepts error and destination as parameters
//destination is the folder that the uploads will be saved at
//filename is for the upload name that you want to save

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/avatar')
    },

    filename : (req, file, cb) =>{
        const picture = file.originalname
        cb(null, file.fieldname + picture)
    }
})


//saving image in the storage
const avatar = multer({storage})

//adding the variable name to the post request
//rendering the signup
//adding avatar.single with the name of the file in the form
router.post('/signup',avatar.single("avatar"), signup.signup)

router.get('/chef', signup.fetchData)

router.get('/chef/:id', signup.fetchOne)


module.exports = router