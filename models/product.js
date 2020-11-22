const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true,
        maxlength: 2000,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        maxlength: 32
    },
    sold: {
        type: Number,
        default: true
    },
    photo: {
        type: Buffer,
        contentType: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)