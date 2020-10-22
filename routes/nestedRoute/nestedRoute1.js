const express = require('express')

const controllers = require('../../controllers/nestedRoute/nestedR1Controller')

const router = express.Router({ mergeParams: true })

router
  .route('/')
  .post(controllers.createOne)
  .get(controllers.getAll)

module.exports = router