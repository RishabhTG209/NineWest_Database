const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    pid: {type: Number, required: true},
    name: {type: String, required: true},
    brand: {type: String, required: true},
    price: {type: Number, required: true},
    discount: {type: Number, required: true},
    description: {type: String, required: true},
    image: [
        {type: URL, required: true},
        {type: URL, required: true},
        {type: URL, required: true},
        {type: URL, required: true}
    ]
})

module.exports = mongoose.model('product',productSchema)
