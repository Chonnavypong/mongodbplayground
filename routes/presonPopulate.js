const express = require('express')

const controllers = require('../controllers/PopulationPlayground/PersonController')
const router = express.Router()

router
  .route('/')
  .post(controllers.createOne)
  .get(controllers.getAll)

router.route('/one').get(controllers.getOne)

// router.route('/test').get(controllers.test)

module.exports = router
