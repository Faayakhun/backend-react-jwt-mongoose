const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    }]
})

const Cart = mongoose.model("cart", CartSchema)
module.exports = Cart