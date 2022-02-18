//requiring modules
const express = require('express')
const registerR = require('../controllers/signup')
const{authUser,getUser } = require('../middleware/authUser')

const router = express.Router()
const multer = require('multer')




//saving the image to the public folder
//cb is a callback which accepts error and destination as parameters
//destination is the folder that the uploads will be saved at
//filename is for the upload name that you want to save
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/avatar')
    },

    filename: function(req, file, cb){
        const uniqueSuffix = file.originalname
        cb(null, file.fieldname + uniqueSuffix)
    }    
})

//saving image in the storage
const upload = multer({storage})
//rendering files

//adding the variable name to the post request


//  router.post('/avatar', upload.single('avatar'), registerR.addAvatar)



//rendering files

 router.post('/signup', registerR.signup)

router.post('/login', registerR.login)

router.get('/logout', registerR.loggingOut)

router.get('/chef', registerR.allUsers)

router.get('/chefs/:id', registerR.oneUser)

router.get('/myRecipes', registerR.oneUserRecipe)







module.exports = router