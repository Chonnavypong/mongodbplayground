const mongoose = require('mongoose')
const shape = require('./Shape')

const { Schema } = mongoose

const schema = Schema({
  side: Number
})

schema.path(shape).discriminator('Square', schema)

module.exports = mongoose.model('Square')
