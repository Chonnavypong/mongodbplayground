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
router.use('/aggregation/training/company', require('./Dataset/training/trainingCompany'))

router.use('/inhabitant', require('./inhibitantRoute'))

module.exports = router
