const mongoose = require('mongoose')
const categoryBase = require('./../Category/baseCategory.discreminator')

const ProductCategory = categoryBase.discriminator(
  'ProductCategory',
  new mongoose.Schema({
    author: { type: String}
  })
)

module.exports = mongoose.model('ProductCategory')