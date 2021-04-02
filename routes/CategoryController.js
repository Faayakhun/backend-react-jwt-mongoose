const express = require("express")
const {Category} = require("../models")

const app = express()

app.get('/category', async (req,res)=>{
    const category = await Category.find({})
    try {
        res.send(category)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.post('/category', async (req,res)=> {
    const category = await Category.create(req.body)
    try {
        res.send(category)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = app