const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = Schema({
  body: {
    type: String,
    trim: true,
    lowercase: true
  },
  refModel: {
    type: Schema.Types.ObjectId,
    refPath: 'onModel'
  },
  onModel: {
    type: String,
    requrie: true,
    enum:[ 'Blog', 'Product']
  }
})

schema.pre('save', function(next) {
  console.log(this)
  this.populate({
    path: 'refModel'
  }).execPopulate()
  next()
})

module.exports = mongoose.model('Comment', schema)
