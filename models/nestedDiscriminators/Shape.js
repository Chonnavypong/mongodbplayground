const mongoose = require('mongoose')

const { Schema } = mongoose

const schemaOptions = {
  toJSON: {
    virtuals: true
  },
  toObject: { virtuals: true },
  discriminatorKey: 'type',
  collection: 'shape'
}

const schema = Schema(
  {
    name: {
      type: String
    }
  },
  schemaOptions
)

module.exports = mongoose.model('Shape', schema)
