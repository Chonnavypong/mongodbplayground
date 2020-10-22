const express = require('express')

const controllers = require('../../controllers/nestedRoute/nestedR2Controller')
const routeNestedRoute1 = require('./nestedRoute1')

const router = express.Router()

router.use('/test', routeNestedRoute1)
router.use('/test/:p1', routeNestedRoute1)

router
  .route('/')
  .post(controllers.createOne)
  .get(controllers.getAll)

module.exports = router