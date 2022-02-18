const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const { type } = require('express/lib/response');

const{Schema} = mongoose

const avatarSchema = new Schema({
    avatar : {
        type: String
    },
    
    user: 
        {
            type: Schema.Types.ObjectId,
            ref: "user"
        }   
    

}, {timestamps: true}, )



//adding bcrypt to hash the password after its saved in the database



//creating the model and assigning the schema to it
const profilePic = mongoose.model('profilePic', avatarSchema)

module.exports = profilePic