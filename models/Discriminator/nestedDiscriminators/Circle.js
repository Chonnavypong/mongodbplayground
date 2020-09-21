const mongoose = require('mongoose')
const shape = require('./Shape')

const { Schema } = mongoose

const schema = Schema({
  url: String
})

schema.path(shape).discriminator('Circle', schema)

module.exports = mongoose.model('Circle')
