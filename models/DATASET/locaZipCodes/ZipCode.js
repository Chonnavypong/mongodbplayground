const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
  // _id: {
  //   type: String,
  //   unique: true,
  //   index: true
  // },
  city: String,
  loc: {
    type: [Number],
    index: '2d'
  },
  pop: Number,
  state: String
})
module.exports = mongoose.model('Zipcodes', schema)
