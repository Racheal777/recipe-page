const express = require('express')
const recipeCon = require('../controllers/recipeCon')
const multer = require('multer')


const router = express.Router()

//saving the image to the public folder
//cb is a callback which accepts error and destination as parameters
//destination is the folder that the uploads will be saved at
//filename is for the upload name that you want to save
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/uploads')
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
router.post('/post', upload.single('foodImage'), recipeCon.saveData)

router.get('/get', recipeCon.getData )

router.get('/get/:id', recipeCon.getOneData )


module.exports = router;
