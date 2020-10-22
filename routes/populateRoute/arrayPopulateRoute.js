const express = require('express')

const Controllers = require('../../controllers/PopulationPlayground/arrayPopulateController')

const router = express.Router()

router
  .route('/')
  .post(Controllers.createOne)
  .get(Controllers.getAll)

router.route('/:id').get(Controllers.getOne)
module.exports = router
