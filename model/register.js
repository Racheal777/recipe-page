const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const{Schema} = mongoose

const userSchema = new Schema({
    fullName : {
        type: String,
        // required: true
    },

    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Please the password length should at least be eight"]
    },
    
}, {timestamps: true}, )



//adding bcrypt to hash the password after its saved in the database

userSchema.pre('save', async function(next) {

    //generating salt
    const salt = await  bcrypt.genSalt()
    //console.log(salt)

    //hashing the password
    this.password = await bcrypt.hash(this.password, salt)

    //console.log(this.password)
    //running the code after hashing is done
    next()    
})

//creating the model and assigning the schema to it
const user = mongoose.model('user', userSchema)

module.exports = user