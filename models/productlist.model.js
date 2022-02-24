const mongoose = require('mongoose')


const productListSchema = new mongoose.Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    year: {type: Number, required: true},
    rating: {type: Number, required: true}
    
},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model('productlist',productListSchema)
