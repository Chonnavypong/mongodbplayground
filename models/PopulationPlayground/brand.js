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
    }
  },
  schemaOptions
)

schema.virtual('members', {
  ref: 'Car',
  localField: 'name',
  foreignField: 'brand',
  justOne: false,
  options: { sort: { name: -1 }, limit: 5 }
})

module.exports = mongoose.model('Brand', schema)
