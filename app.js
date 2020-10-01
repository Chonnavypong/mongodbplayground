const express = require('express')

const config = require('dotenv').config({
  path: './environment/config.env'
})

const morgan = require('morgan')
require('./configs/db')

const app = express()

// 1) Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// รับค่า req.body (เรียก body-parsers อีกที) ตัวนี้เป็น built-in ของ express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROUTE
// app.use('/api/mongodbPlayground/v1', require('./Routes'))

app.use('/api/v1', require('./routes'))

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server`
  })
})

const port = config.parsed.PORT || 3000

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on poart ${port}`))

module.exports = app
