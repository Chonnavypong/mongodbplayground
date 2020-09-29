const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  st: String,
  ts: Date,
  postion: {
    type: {
      type: String,
      default: 'Point'
    },
    coordiantes: {
      type: Array
    }
  }
})

module.exports = mongoose.model('Data', schema)
