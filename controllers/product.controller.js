const express = require('express');

const Product = require('../models/product.model')

const router = express.Router()

router.post("/",async(req,res)=>{
    try {
        const products = await Product.create(req.body);

        return res.send(products)
    } catch (error) {
        return res.send(error.message)
    }
})

router.get("/",async(req,res)=>{
    try {
        const products = await Product.find().lean().exec()

        return res.send(products)
    } catch (error) {
        return res.send(error.message)
    }
})

module.exports = router