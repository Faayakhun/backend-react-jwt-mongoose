const express = require("express")
const {User} = require("../models")

const app = express()

app.get('/user', async (req,res)=>{
    const user = await User.find({},"-__v")
    try {
        res.send(user)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.get('/user/:id', async (req,res)=>{
    const user = await User.findById(req.params.id)
    try {
        res.send(user)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})


module.exports = app