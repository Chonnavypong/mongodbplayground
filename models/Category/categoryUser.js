const mongoose = require('mongoose')
const Base = require('./baseCategory.discreminator')
const { collection } = require('./baseCategory.discreminator')

Base.discriminator(
  'CategoryOfUser',
  new mongoose.Schema({
    age: {
      type: Number
    }
  })
)

module.exports = mongoose.model('CategoryOfUser')
