const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({})

module.exports = mongoose.model('training_posts', schema)