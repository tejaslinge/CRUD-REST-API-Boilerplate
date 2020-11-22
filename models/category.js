const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    }
})

module.exports = mongoose.model('Category', categorySchema)