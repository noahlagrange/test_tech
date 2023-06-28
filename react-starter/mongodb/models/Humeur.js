const mongoose = require('mongoose')

const desc = mongoose.Schema({
    description: {type: String, required: true},
    id_patient: {type: String, required: true}
})

module.exports = mongoose.model('Humeur', desc);