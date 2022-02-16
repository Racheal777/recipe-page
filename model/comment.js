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

    recipe_id :
    {
        type: String
    },

    recip: [
        {
            type: Schema.Types.ObjectId,
            ref: "recipe"
        }   
    ]

    // recipy : [
    //     {type: mongoose.Schema.Types.ObjectId,ref:'recipe'}
    // ]

}, {timestamps: true}, )

//creating the model and assigning the schema to it
const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment