const express = require('express')
const app = express()
const cors = require('cors')
const {PORT, dbConfigMongo} = require('./config')
const userRouter = require('./routes/UserController')
const productRouter = require('./routes/ProductController')
const categoryRouter = require('./routes/CategoryController')
const cartRouter = require('./routes/CartController')
const authRouter = require('./routes/auth')
const verifyToken = require('./middleware/authorization')

const localPort =PORT || 3000
console.log('running on',localPort)
app.use(cors())
app.use(express.json())

app.get("/", (req,res)=> {
    res.send("<h1 style='text-align:center'>Welcome to my database</h1>"+"<h3 style='text-align:center'>/user to see all user</h3>"+"<h3 style='text-align:center'>username and password are the same</h3>")
})

app.use(authRouter)
app.use(userRouter)
app.use(productRouter)
app.use(categoryRouter)
app.use(cartRouter)




if (dbConfigMongo) {
    app.listen(PORT, ()=> {
        console.log("server running on port",PORT)
        console.log("connected to mongoDB")
    })
} else {
    console.log("not connect to mongo")
}