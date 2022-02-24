const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    cartItem: {
        type:mongoose.Schema.Types.ObjectId, ref:"cart",required:true
    }
})

module.exports = mongoose.model('user',userSchema)
