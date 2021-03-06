const mongoose = require('mongoose')

const { Schema } = mongoose

const schemaOptions = {
  toJSON: {
    virtuals: true
  }
}

const schema = Schema(
  {
    title: {
      type: String,
      trim: true,
      lowercase: true
    }
  },
  schemaOptions
)

schema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'refModel'
})

module.exports = mongoose.model('Blog', schema)
