const express = require('express');

const Productlist = require('../models/productlist.model')

const router = express.Router()

//Post Data
router.post("/",async(req,res)=>{
    try {
        const products = await Productlist.create(req.body);
        return res.send(products)
    } catch (error) {
        return res.send(error.message)
    }
})

//Get all
router.get("/",async(req,res)=>{
    try {
        const products = await Productlist.find().lean().exec()
        return res.send(products)
    } catch (error) {
        return res.send(error.message)
    }
})

router.get("/:category",async(req,res)=>{
    try {
        const products = await Productlist.find({category: req.params.category}).lean().exec()
        return res.send(products)
    } catch (error) {
        return res.send(error.message)
    }
})

// Get Particulaar
router.get("/:id",async (req,res)=>{
    try{
        const productlist= await Productlist.findById(req.params.id).lean().exec()
        return res.send(productlist);
    }
    catch(err){
        console.log(res);
    }
})
// Patch
router.patch("/:id",async (req,res)=>{
    try{
        const productlist= await Productlist.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        }).lean().exec()
        return res.send(productlist);
    }
    catch(err){
        console.log(res);
    }
})

// Delete
router.delete("/:id",async (req,res)=>{
    try{
        const productlist= await Productlist.findByIdAndDelete(req.params.id).lean().exec()
        return res.send(productlist);
    }
    catch(err){
        console.log(res);
    }
})

module.exports = router