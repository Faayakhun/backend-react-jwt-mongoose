const {MONGODB_LIVE, PORT} = require('./environment')
const { dbConfigMongo } = require('./db')

module.exports = {
    PORT,
    MONGODB_LIVE,
    dbConfigMongo
}