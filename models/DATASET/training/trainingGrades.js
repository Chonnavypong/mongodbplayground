const mongoose = require('mongoose')

const { Schema } = mongoose

const schemaOptions = {
  timestamp: true
}

const schema = new Schema(
  {
    gradePoint: Number
  },
  schemaOptions
)

// module.exports = mongoose.model('training_grades', schema)
// module.exports = mongoose.model('grades', schema)
module.exports = schema
