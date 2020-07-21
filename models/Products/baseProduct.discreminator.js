const mongoose = require('mongoose')

const baseOptions = {
  discriminatorKey: 'productType', // our discriminator key, could be anything
  collection: 'product', // the name of our collection
  timestamps: true,
  autoIndex: false
}

// Our Base schema: these properties will be shared with our "real" schemas
const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date_added: { type: Date, required: true },
    redo: { type: Boolean, required: false }
  },
  baseOptions
)

module.exports = mongoose.model('Base', schema)
