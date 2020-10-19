const express = require('express')

const Controllers = require('../../controllers/PopulationPlayground/selfRefController')

const router = express.Router()

router
  .route('/')
  .post(Controllers.createOne)
  .get(Controllers.getAll)

module.exports = router