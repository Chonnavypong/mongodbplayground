const mongoose = require('mongoose')
const Base = require('./baseProduct.discreminator') // we have to make sure our Book schema is aware of the Base schema

const Lighting = Base.discriminator(
  'Lighting',
  new mongoose.Schema({
    author: { type: String, required: true }
  })
)

module.exports = mongoose.model('Lighting')
