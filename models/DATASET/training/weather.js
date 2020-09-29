const mongoose = require('mongoose')

const { Schema } = mongoose

const schemaOptions = {
    timestamp: true
  }

const schema = new Schema({
    superman: String
}, schemaOptions)

// module.exports = mongoose.model('training_grades', schema)
module.exports = mongoose.model('data', schema)