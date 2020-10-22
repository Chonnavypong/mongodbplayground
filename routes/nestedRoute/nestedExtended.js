const express = require('express')

const controllers = require('../../controllers/nestedRoute/nestedExtendedController')
const nestedBase = require('./nestedBase')

const router = express.Router()

// router.use('/test', nestedBase)
// router.use('/test/:p1', nestedBase)

router.use('/', nestedBase)

router
  .route('/')
  .post(controllers.createOne)
  .get(controllers.getAll)

module.exports = router