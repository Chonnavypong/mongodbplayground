const express = require('express')

const lightingController = require('../controllers/Products/lightingController')

const router = express.Router()

router
  .route('/')
  .get(lightingController.getAll)
  .post(lightingController.createOne)

module.exports = router
