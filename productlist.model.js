const mongoose = require('mongoose')


const productListSchema = new mongoose.Schema({
    category: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true}
})

module.exports = mongoose.model('productlist',productListSchema)
