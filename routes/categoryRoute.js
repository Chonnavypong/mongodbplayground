const express = require('express')

const categoryDiscreminator = require('../controllers/Category/categoryController')

const router = express.Router()

router
  .route('/')
  .get(categoryDiscreminator.test)
  .post(categoryDiscreminator.createOne)

module.exports = router
