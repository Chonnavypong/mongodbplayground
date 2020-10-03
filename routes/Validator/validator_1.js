const express = require('express')

const controllers = require('../../controllers/Validator/validator-1')

const router = express.Router()

<<<<<<< HEAD
router.route('/:id').get(controllers.getByID)
=======
router.route('/:id').get(controllers.getOne)
>>>>>>> 72f0f15a1d32cc8f930309915ce969d526ec5d08

router
  .route('/')
  .post(controllers.createOne)
  .get(controllers.getAll)

module.exports = router
