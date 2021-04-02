const express = require("express")
const {Product} = require("../models")

const app = express()

app.get('/product', async (req,res)=>{
    const product = await Product.find({}, "-__v").populate('category',"-__v")
    try {
        res.send(product)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.post('/product', async (req,res)=> {
    const product = await Product.create(req.body)
    try {
        res.send(product)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = app