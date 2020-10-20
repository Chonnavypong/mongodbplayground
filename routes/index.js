// const { Router } = require('express')
const express = require('express')

const router = express.Router()

router.use('/category', require('./categoryRoute'))

// Population Playground
router.use('/basicPopulate/person', require('./presonPopulate'))
router.use('/basicPopulate/story', require('./storyPopulate'))
router.use('/basicPopulate/product', require('./productPopulate'))
router.use('/basicPopulate/blog', require('./blogPopulate'))
router.use('/basicPopulate/comment', require('./commentPopulate'))
router.use('/basicPopulate/car', require('./carPopulation'))
router.use('/basicPopulate/brand', require('./brandPopulation'))

// Discriminator Playground
router.use('/discriminator/event', require('./Discriminator/event'))
router.use(
  '/discriminator/clickedlinkevent',
  require('./Discriminator/clickedLinkEvent')
)
// router.use(
//   '/discriminator/shape',
//   require('./Discriminator/nestedDiscriminators/shape')
// )

// Aggregation Playground
router.use('/aggregation/zipcode', require('./Dataset/zipCode'))
router.use(
  '/aggregation/training/company',
  require('./Dataset/training/trainingCompany')
)
router.use(
  '/aggregation/training/posts',
  require('./Dataset/training/trainingPosts')
)
router.use(
  '/aggregation/training/grades',
  require('./Dataset/training/trainingGrades')
)

// Aggregation Playground - w3resource -restaurants
router.use(
  '/aggregation/w3resource/restaurants',
  require('./Dataset/w3resource/restaurants')
)

// DB Connection playground
router.use('/connection/weather', require('./Dataset/training/weather'))

// Validator
router.use('/validator/validator_1', require('./Validator/validator_1'))
router.use('/validator/validator_2', require('./Validator/validator_2'))

// Populate
router.use('/populate/selfref', require('./populateRoute/selfRefRoute'))
router.use(
  '/populate/arraypopulate',
  require('./populateRoute/arrayPopulateRoute')
)

router.use('/inhabitant', require('./inhibitantRoute'))

module.exports = router
