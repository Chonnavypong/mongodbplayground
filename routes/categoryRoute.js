const express = require('express')

const categoryDiscreminator = require('../controllers/Category/categoryController')

const router = express.Router()

router
  .route('/')
  .post(categoryDiscreminator.createOne)
  .get(categoryDiscreminator.getAll)
  .get(categoryDiscreminator.test)

router.route('/:id').get(categoryDiscreminator.findOne)

module.exports = router
