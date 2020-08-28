const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const baseOptions = {
  timestamps: true,
  // discriminatorKey: 'categoryType', // our discriminator key, could be anything
  // collection: 'productCategory', // the name of our collection
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      require: true,
      unique: true
    },
    parent: {
      // type: mongoose.Schema.ObjectId,
      type: String,
      trim: true,
      lowercase: true,
      default: null,
      ref: 'Category'
    },
    category_seq: {
      type: Number
    }
  },
  baseOptions
)

schema.plugin(AutoIncrement, {
  id: 'category_counter',
  inc_field: 'category_seq',
  reference_fields: ['parent']
})

module.exports = mongoose.model('Category', schema)
