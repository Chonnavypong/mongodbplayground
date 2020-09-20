const express = require('express')

const router = express.Router()

router.use('/category', require('./categoryRoute'))
router.use('/basicPopulate/person', require('./presonPopulate'))
router.use('/basicPopulate/story', require('./storyPopulate'))
router.use('/basicPopulate/product', require('./productPopulate'))
router.use('/basicPopulate/blog', require('./blogPopulate'))
router.use('/basicPopulate/comment', require('./commentPopulate'))
router.use('/basicPopulate/car', require('./carPopulation'))
router.use('/basicPopulate/brand', require('./brandPopulation'))
router.use('/inhabitant', require('./inhibitantRoute'))

module.exports = router
