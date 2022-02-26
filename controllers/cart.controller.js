const express = require('express');

const Cart = require('../models/cart.model')

const router = express.Router()

// Post Data
// router.post("/",async(req,res)=>{
//     try {
//         const carts = await Cart.create(req.body);

//         return res.send(carts)
//     } catch (error) {
//         return res.send(error.message)
//     }
// })

router.post("/additem/:user_id", async (req,res)=>{

    try{
        const product_id=req.body.product_id;
        const user_id = req.params.user_id;
        const cart_item= await cart.findOne({"user_id":user_id,"product_id":product_id}).lean().exec();
        if(cart_item){

            if(req.query.operation=="dec"){

                await cart.findByIdAndUpdate(cart_item._id,{$inc:{qty:-1}});
             
            }
            else{
                await cart.findByIdAndUpdate(cart_item._id,{$inc:{qty:1}});
            }
            res.end() ; 
        }
        else{ 
           await cart.create(req.body);
           res.end()
         }
    }catch(e){
        res.send(e.message)
    }
});

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