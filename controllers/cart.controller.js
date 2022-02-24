const express = require('express');

const Cart = require('../models/cart.model')

const router = express.Router()

// Post Data
router.post("/",async(req,res)=>{
    try {
        const carts = await Cart.create(req.body);

        return res.send(carts)
    } catch (error) {
        return res.send(error.message)
    }
})

//Get All
router.get("/",async(req,res)=>{
    try {
        const carts = await Cart.find().lean().exec()

        return res.send(carts)
    } catch (error) {
        return res.send(error.message)
    }
})

// Get Particulaar
router.get("/:id",async (req,res)=>{
    try{
        const cart= await Cart.findById(req.params.id).lean().exec()
        return res.send(cart);
    }
    catch(err){
        console.log(res);
    }
})
// Patch
router.patch("/:id",async (req,res)=>{
    try{
        const cart= await Cart.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        }).lean().exec()
        return res.send(cart);
    }
    catch(err){
        console.log(res);
    }
})

// Delete
router.delete("/:id",async (req,res)=>{
    try{
        const cart= await Cart.findByIdAndDelete(req.params.id).lean().exec()
        return res.send(cart);
    }
    catch(err){
        console.log(res);
    }
})
module.exports = router