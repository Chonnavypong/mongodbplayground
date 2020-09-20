const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaOptions = {
  toJSON: {
    virtuals: true
  }
}

const schema = Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true
  }
}, schemaOptions)

schema.virtual('refModel', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'refModel',
  count: true
})

module.exports = mongoose.model('Product', schema)
