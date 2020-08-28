const express = require('express')

const router = express.Router()

router.use('/category', require('./categoryRoute'))

module.express = router
