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

    register_id : String,
     
    
    
}, {timestamps: true}, )

//adding index to the schema to enable a search on it
recipeSchema.index({recipeName: 'text', cookName: 'text'})
// recipeSchema.index({'$**': 'text'});
//creating the model and assigning the schema to it
const recipe = mongoose.model('recipe', recipeSchema)



module.exports = recipe


