const express = require('express')

const controllers = require('../../controllers/Validator/validator-1')

const router = express.Router()

router.route('/:id').get(controllers.getByID)

router
  .route('/')
  .post(controllers.createOne)
  .get(controllers.getAll)

module.exports = router