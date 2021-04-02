const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    description: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }
    
})

const Product = mongoose.model("product", ProductSchema)
module.exports = Product