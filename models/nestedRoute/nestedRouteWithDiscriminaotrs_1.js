const mongoose = require('mongoose')

const { Schema } = mongoose

const schemaOptions = {
  toJSON: {
    virtuals: true
  },
  discriminatorKey: 'type',
  collection: 'nestedRoute'
}

const schema = Schema(
  {
    name: {
      type: String
    }
  },
  schemaOptions
)

module.exports = mongoose.model('NestedRoute', schema)
