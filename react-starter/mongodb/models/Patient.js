const mongoose = require('mongoose')

const prod = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true}
})

module.exports = mongoose.model('Patient', prod);