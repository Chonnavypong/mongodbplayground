const express = require('express')

const controllers = require('../controllers/PopulationPlayground/brandController')

const router = express.Router()

router
  .route('/')
  .post(controllers.createOne)
  .get(controllers.getAll)

module.exports = router
