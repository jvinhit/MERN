const mongoose = require('mongoose')

mongoose
    .connect( "mongodb://admin:admin1234@ds243054.mlab.com:43054/zolo" || 'mongodb://127.0.0.1:27017/cinema', { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
