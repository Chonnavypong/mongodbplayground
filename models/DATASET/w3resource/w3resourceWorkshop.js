const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
  address: {
    building: String,
    coord: [Number],
    street: String,
    zipcode: String
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: Date,
      grade: String,
      score: Number
    }
  ],
  name: String,
  restaurant_id: String
})

module.exports = mongoose.model('Restaurants', schema)
