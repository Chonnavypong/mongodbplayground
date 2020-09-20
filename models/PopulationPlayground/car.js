const mongoose = require('mongoose')

const { Schema } = mongoose

const schemaOptions = {
  toJSON: {
    virtuals: true
  }
}

const schema = Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true
    },
    brand: {
      type: String,
      lowercase: true,
      trim: true
    }
  },
  schemaOptions
)

module.exports = mongoose.model('Car', schema)
