const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const baseOptions = {
  timestamps: true,
  discriminatorKey: 'categoryType', // our discriminator key, could be anything
  collection: 'productCategory', // the name of our collection
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}

const schema = new mongoose.Schema(
  {
    mainCategory: {
      type: String,
      trim: true,
      lowercase: true
      // require: true
    },
    subCategory: {
      type: String,
      trim: true,
      lowercase: true
    },
    category_seq: {
      type: Number
    },
    subCategory_seq: {
      type: Number
    }
  },
  baseOptions
)

schema.plugin(AutoIncrement, {
  id: 'counter_category_id',
  inc_field: 'category_seq',
  referance_fields: ['mainCategory', 'subCategory']
})
schema.index(
  {
    mainCategory: 1,
    subCategory: 1
  },
  {
    unique: true
  }
)

module.exports = mongoose.model('CategoryBase', schema)
