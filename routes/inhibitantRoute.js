const express = require('express')

const inhabitantController = require('../controllers/mongooseSequence/seqAdvanceController')

const router = express.Router()

router
  .route('/')
  .get(inhabitantController.test)
  .post(inhabitantController.createOne)

module.exports = router
