const express = require('express')
const recipeCon = require('../controllers/recipeCon')
const comments = require('../controllers/recipeComment')
const multer = require('multer')
const search = require('../controllers/searchC')

const newControl = require('../controllers/newC')


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
//  router.post('/post', upload.single('foodImage'), recipeCon.saveData)

 router.post('/post', upload.single('foodImage'), newControl.sign)

// router.get('/', newControl.fetch)

// router.get('/gett/:id', recipeCon.getOneComment )

 router.get('/', recipeCon.getAll )

 router.get('/home', recipeCon.getData)

router.get('/all', recipeCon.getAllDatas )


// router.get('/allData', recipeCon.getAllData)

// router.get('/get/:id', recipeCon.getOneData )

// router.get('/fetch', recipeCon.getResults)

router.post('/com/:recipeId', comments.saveCom)

router.get('/get/:id', comments.findRec)

router.get('/comment',comments.get)

router.get('/popular',comments.findPopular)

router.get('/search', search.searches)





router.post('/create/:id', newControl.create);
router.post('/populate/:id',newControl.userByPost);

router.post('/find/:id',newControl.findOne);

module.exports = router;
