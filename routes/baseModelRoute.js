const express = require('express')

const baseModelController = require('../controllers/Products/baseController')

const router = express.Router()

router
  .route('/')
  .get(baseModelController.getAll)
  .post(baseModelController.createOne)

module.exports = router
