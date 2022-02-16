const mongoose = require('mongoose')

const{Schema} = mongoose

const recipeSchema = new Schema({
    recipeName : {
        type: String,
        lowercase: true
        
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
        lowercase: true,
        

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
        lowercase:true
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

     comment_id : {
         type: String
     },
     
     comment: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }   
    ]
    
    
}, {timestamps: true}, )

//adding index to the schema to enable a search on it
// recipeSchema.index({recipeName: 'text', cookName: 'text'})
 recipeSchema.index({'$**': 'text'});
//creating the model and assigning the schema to it
const recipe = mongoose.model('recipe', recipeSchema)



module.exports = recipe


