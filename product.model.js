const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    pid: {type: Number, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    discount: {type: Number, required: true},
    discription: {type: String, required: true},
    image1: {type: String, required: true},
    image2: {type: String, required: true},
    image3: {type: String, required: true}
})

module.exports = mongoose.model('product',productSchema)
