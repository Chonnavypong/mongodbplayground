const express = require('express')
const morgan = require('morgan')

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')

const config = require('dotenv').config({
  path: './config.env'
})

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
  // แบบที่ 1 ต้องเรียกทุกๆ ครั้ง
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can't find ${req.originalUrl} on this server`
  // })
  // next()

  // แบบที่ 2 ดีกว่าแบบที่ 1 แต่จะถูกนำไปสร้างเป็น error middleware ในส่วนของ controller เพื่อแจ้ง error อื่นๆ ที่ไม่เกี่ยวกับ operation error
  // const err = new Error(`Can't find ${req.originalUrl} on this server`)
  // err.status = 'fail'
  // err.statusCode = 404
  // next(err)

  // แบบที่ 3 ใช้สำหรับแจ้ง error ที่เกิดจาก operation error โดยเราสามารถใช้ AppError Class นี้เป็น Global Error สำหรับ Application ในการแจ้ง Error ที่เกิดจาก operation error
  // operation error คือ error ที่ไม่ได้เกิดจาก bug หรือ code ที่เราเขียน เช่น user ใส่ url มาผิด, server error เป็นต้น

  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

// ย้าย code ไปที่ errorController.js ใน controller แทน และเรียกใน app.js ในชื่อ globalErrorHandler แล้วนำมาใช้ด้านล่าง

// app.use( (err, req, res, next) => {
//   err.statusCode = err.statusCode || 500
//   err.status = err.status || 'Error'

//   res.status( err.statusCode).json({
//     status: err.status,
//     message: err.message
//   })
// })

const port = config.parsed.PORT || 3000
// console.log(config.parsed.NODE_ENV, process.env.NODE_ENV)

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on poart ${port}`))

app.use(globalErrorHandler)

module.exports = app
