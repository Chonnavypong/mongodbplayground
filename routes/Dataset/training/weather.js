const express = require('express')

const controllers = require('../../../controllers/DataSet/training/weather')

const router = express.Router()

router
  .route('/')
  .get(controllers.getAll)
  .post(controllers.createOne)

router.route('/:id').get(controllers.getOne)

module.exports = router
