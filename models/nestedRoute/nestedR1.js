const mongoose = require('mongoose')

const { Schema } = mongoose

const schemaOptions = {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
  // discriminatorKey: 'eventType',
  // collection: 'items'
}

const schema = Schema(
  {
    name: {
      type: String
    }
  },
  schemaOptions
)

module.exports = mongoose.model('Nested1', schema)
