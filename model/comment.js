const mongoose = require('mongoose')

const{Schema} = mongoose

const commentSchema = new Schema({
    
    name : {
        type:String
    },

    message : {
        type: String
    },

    rating1 : {
        type: Number
    },

    recipy : [
        {type: mongoose.Schema.Types.ObjectId,ref:'recipe'}
    ]

}, {timestamps: true}, )

//creating the model and assigning the schema to it
const comment = mongoose.model('comment', commentSchema)

module.exports = comment