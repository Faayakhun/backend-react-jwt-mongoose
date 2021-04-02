const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models')

const app = express()

app.post('/register',async (req,res)=> {
    const userData = req.body
    bcrypt.hash(userData.password,10, async function(err,hash){
        const user = await User.create({
            name: userData.name,
            password: hash,
            email: userData.email,
            address:userData.address
        })
    
    try {
        res.json({
            message:"user added successfully",
            data: user
        })
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
    })
    
})

app.post('/login', async (req,res)=> {
    const {name,password} = req.body
    let user = await User.findOne({name})
    if (user ) {
        if (bcrypt.compareSync(password, user.password)){
            user = user.toObject()
            const {password, ...payload} = user
            const token = jwt.sign(payload, "inirahasia")
            res.json({
                message: "login success",
                token
            })
        } else {
            res.json({
                message: "invalid login credentials"
            })
        }
        
    }
    
})

module.exports = app