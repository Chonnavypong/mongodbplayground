const mongoose = require('mongoose')
const Base = require('./nestedRouteWithDiscriminaotrs_1')

const { Schema } = mongoose

const schema = Schema({
  lastName: String
})

Base.discriminator('Extended', schema)

module.exports = mongoose.model('Extended')
