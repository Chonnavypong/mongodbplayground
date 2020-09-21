const mongoose = require('mongoose')
const Event = require('./BaseEvent')

const { Schema } = mongoose

const schema = Schema({
  url: String
})

Event.discriminator('ClickedLink', schema)

module.exports = mongoose.model('ClickedLink')
