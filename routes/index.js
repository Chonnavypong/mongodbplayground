const express = require('express')

const router = express.Router()

router.use('/category', require('./categoryRoute'))
router.use('/inhabitant', require('./inhibitantRoute'))

module.exports = router
