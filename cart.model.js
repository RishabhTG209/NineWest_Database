const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({
    user_id: {
        type:mongoose.Schema.Types.ObjectId, ref:"user",required:true
    },
    product_id: 
        {type:mongoose.Schema.Types.ObjectId, ref:"product",required:true},
    qty:{type:Number,default:1 }
    
})

module.exports = mongoose.model('cart',cartSchema)



