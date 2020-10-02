const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
  name: String,
  zipCode: String
  //   body: String,
  //   permalink: String,
  //   author: String,
  //   title: String,
  //   tags: Array,
  //   comments: [
  //     {
  //       body: String,
  //       email: String,
  //       author: String
  //     }
  //   ]
})

module.exports = mongoose.model('post', schema)
