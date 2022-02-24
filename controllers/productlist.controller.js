const express = require('express');

const Productlist = require('../models/productlist.model')

const router = express.Router()

router.post("/",async(req,res)=>{
    try {
        const products = await Productlist.create(req.body);
        return res.send(products)
    } catch (error) {
        return res.send(error.message)
    }
})

router.get("/",async(req,res)=>{
    try {
        const products = await Productlist.find().lean().exec()
        return res.send(products)
    } catch (error) {
        return res.send(error.message)
    }
})

module.exports = router