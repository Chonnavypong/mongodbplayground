const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
})

// module.exports = mongoose.model('training_grades', schema)
module.exports = mongoose.model('grades', schema)