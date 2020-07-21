const express = require('express')

const categoryProduct = require('../controllers/Category/categoryProductController')

const router = express.Router()

router
  .route('/')
  .get(categoryProduct.testRoute)
  .post(categoryProduct.createOne)

module.exports = router
