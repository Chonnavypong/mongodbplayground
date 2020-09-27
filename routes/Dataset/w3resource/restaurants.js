const express = require('express')

const controllers = require('../../../controllers/DataSet/w3resource/restaurants')

const router = express.Router()

router
  .route('/')
  // .post(controllers.createOne)
  .get(controllers.getAll)

module.exports = router
