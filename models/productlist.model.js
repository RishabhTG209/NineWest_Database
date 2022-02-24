const mongoose = require('mongoose')


const productListSchema = new mongoose.Schema({
    cat: {type: String, required: true},
    name: {type: String, required: true},
    image: {type: Number, required: true}
},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model('productlist',productListSchema)
