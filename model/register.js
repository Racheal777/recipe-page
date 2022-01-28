const mongoose = require('mongoose')

const{Schema} = mongoose

const userSchema = new Schema({
    firstName : {
        type: String,
        // required: true
    },

    lastName: {
        type:String,
        // required: true,
        lowercase: true

    },

    email : {
        type:String,
        // required: true,
        lowercase: true

    },

    userName : {
        type:String,
        
        
    },

    password: {
        type:String,
        // required: true,
    },

    
}, {timestamps: true}, )

//creating the model and assigning the schema to it
const user = mongoose.model('user', userSchema)

module.exports = user