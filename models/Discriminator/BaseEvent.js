const mongoose = require('mongoose')

const { Schema } = mongoose

const schemaOptions = {
  toJSON: {
    virtuals: true
  },
  discriminatorKey: 'eventType',
  collection: 'items'
}

const schema = Schema(
  {
    time: {
      type: Date
    }
  },
  schemaOptions
)

module.exports = mongoose.model('Event', schema)
