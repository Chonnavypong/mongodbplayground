const mongoose = require('mongoose')

const { Schema } = mongoose

const storySchema = Schema({
  title: {
    type: String,
    trim: true,
    lowercase: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Person'
  },
  fans: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Person'
    }
  ]
})

module.exports = mongoose.model('Story', storySchema)
