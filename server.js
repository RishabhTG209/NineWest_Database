const express = require('express')
const cors = require('cors')
const connect = require("./configs/db")
const app = express()

require('dotenv').config();
const PORT = process.env.PORT || 3125;
app.use(express.json())
app.use(cors())

const productSchema= require("./controllers/product.controller")
const productListSchema= require("./controllers/productlist.controller")

app.use("/products",productSchema)
app.use("/productlist",productListSchema)


// https://blooming-refuge-71619.herokuapp.com/ (continue)

app.listen(PORT, async () =>{

    try {
        await connect()
        console.log(`listen on port ${PORT}`)
        
    } catch (error) {
        console.log('error:', error.message)
    }

})