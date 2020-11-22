const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        maxlength: 32, 
        trim: true
    },
    email: {
        type: String, 
        required: true,
        trim: true
    },
    number: {
        type: Number,
        required: true,
        length: 10
    }
},  {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)