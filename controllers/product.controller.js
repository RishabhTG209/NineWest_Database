const express = require('express');

const Product = require('../models/product.model')

const router = express.Router()


//Post Data
router.post("/",async(req,res)=>{
    try {
        const products = await Product.create(req.body);

        return res.send(products)
    } catch (error) {
        return res.send(error.message)
    }
})


//Get all
router.get("/",async(req,res)=>{
    try {
        const products = await Product.find().lean().exec()

        return res.send(products)
    } catch (error) {
        return res.send(error.message)
    }
})

// Get Particulaar
router.get("/:id",async (req,res)=>{
    try{
        const product= await Product.findById(req.params.id).lean().exec()
        return res.send(product);
    }
    catch(err){
        console.log(res);
    }
})
// Patch
router.patch("/:id",async (req,res)=>{
    try{
        const product= await Product.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        }).lean().exec()
        return res.send(product);
    }
    catch(err){
        console.log(res);
    }
})

// Delete
router.delete("/:id",async (req,res)=>{
    try{
        const product= await Product.findByIdAndDelete(req.params.id).lean().exec()
        return res.send(product);
    }
    catch(err){
        console.log(res);
    }
})

module.exports = router