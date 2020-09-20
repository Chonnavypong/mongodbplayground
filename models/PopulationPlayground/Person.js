const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true
  },
  age: Number,
  stories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Story'
    }
  ]
})

module.exports = mongoose.model('Person', personSchema)
