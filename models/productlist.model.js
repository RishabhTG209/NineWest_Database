const mongoose = require('mongoose')


const productListSchema = new mongoose.Schema({
    cat: {type: String, required: true},
    name: {type: String, required: true},
    image: {type: String, required: true}
})

module.exports = mongoose.model('productlist',productListSchema)
