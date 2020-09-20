const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaOptions = {
  toJSON: {
    virtuals: true
  }
}

const schema = Schema({
  title: {
    type: String,
    trim: true,
    lowercase: true
  }
}, schemaOptions)

schema.virtual('refModel', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'refModel'
})

module.exports = mongoose.model('Blog', schema)
