const mongoose = require('mongoose')

const {MONGODB_LIVE} = require('./environment')

mongoose.connect(MONGODB_LIVE, 
    {useNewUrlParser: true, useUnifiedTopology: true});


// console.log('mongo',MONGODB_LIVE)
const dbConfigMongo = mongoose.connection

module.exports = {dbConfigMongo}