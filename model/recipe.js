const mongoose = require('mongoose')

const{Schema} = mongoose

const recipeSchema = new Schema({
    recipeName : {
        type: String,
        // required: true
    },

    cookName : {
        type:String,
        // required: true,
        lowercase: true

    },

    email : {
        type:String,
        // required: true,
        lowercase: true

    },
    level : {
        type:String,
        enum: ["easy", "medium", "difficult"]
        // required: true,
    },

    ingredients : {
        type:[String],
        lowercase: true
    },

    category : {
        type:String,
        enum: ["breakfast", "lunch", "supper", "dessert", "snack", "drink"],
        // required: true,   
    },

    time : {
        type:String,
        // required: true,
    },
    instruction : {
        type:[String],
        lowercase: true
    },

    foodImage : {
        type: String
    },
    com: [
        {
            type: Schema.Types.ObjectId,
            ref: "comment"
        }   
    ]
     
    
    
}, {timestamps: true}, )


//creating the model and assigning the schema to it
const recipe = mongoose.model('recipe', recipeSchema)



module.exports = recipe


