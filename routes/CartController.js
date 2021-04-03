const express = require("express")
const {Cart} = require("../models")
const verifyToken = require('../middleware/authorization')
const cors = require('cors')

const app = express()

app.get('/cart', async (req,res)=>{
    const cart = await Cart.find({}, "-__v").populate('user',"name").populate('product',"-__v")
    try {
        res.send(cart)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.options('/user/:id/cart',cors())

app.get('/user/:id/cart', async (req,res)=>{
    const userId = req.params.id
    const cart = await Cart.findOne({user: userId}, "-__v").populate('user',"name").populate('product',"-__v")
    try {
        res.send(cart)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.post('/cart', async (req,res)=> {
    const cart = await Cart.create(req.body)
    try {
        res.send(cart)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = app