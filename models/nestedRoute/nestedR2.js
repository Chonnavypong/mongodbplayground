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
    },
    category: {
      type: String,
      enum: ['cat 1A', 'cat 2B']
    }
  },
  schemaOptions
)

module.exports = mongoose.model('Nested2', schema)
