const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        require: true,
    },
    rarity: {
        type: String,
        require: true,
    },
    
})

const Category = mongoose.model("category", CategorySchema)
module.exports = Category