const express = require('express')
const router = express.Router()

router.use('/basemodel', require('./baseModelRoute'))
router.use('/lighting', require('./lightingRoute'))
router.use('/product_category', require('./productCategoryRoute'))
router.use('/user', require('./userRoute'))


module.exports = router
