const mongoose = require('mongoose')

const{Schema} = mongoose

const commentSchema = new Schema({
    recipeName : {
        type: String,
        // required: true
    },

    cookName : {
        type:String,
        // required: true,
        lowercase: true

    },
    name : {
        type:String
    },

    message : {
        type: String
    },

    rating1 : {
        type: Number
    }
}, {timestamps: true}, )

//creating the model and assigning the schema to it
const comment = mongoose.model('comment', commentSchema)

module.exports = comment