const mongoose = require('mongoose')
const bcrypt= require("bcryptjs");

const userSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    cartItem: {
        type:mongoose.Schema.Types.ObjectId, ref:"cart",required:true
    }
})

userSchema.pre("save", function(next){
    if(!this.isModified("password"))return next();


    var hash = bcrypt.hashSync(this.password,8)
    this.password = hash;
    return next();

});

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

module.exports = mongoose.model('user',userSchema)
