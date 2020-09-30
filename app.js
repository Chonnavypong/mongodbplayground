const express = require('express')
const mongoose = require('mongoose')

const config = require('dotenv').config({
  path: './environment/config.env'
})

const morgan = require('morgan')

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
/*
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)
*/

const DB_DATASET = process.env.MONGODB_WEATHER.replace(
  '<PASSWORD>',
  process.env.MONGODB_DATASET_PASSWORD
)

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}
mongoose
  //   .connect(process.env.DATABASE_LOCAL1, mongooseOptions)
  // //   // eslint-disable-next-line no-console
  //   .then(() => console.log('LOCAL DB 1 connection is successful! '))

  /*
   * CONNECT TO mongoDB database dataset for aggregation practice
   */
  .connect(DB_DATASET, mongooseOptions)
  // eslint-disable-next-line no-console
  .then(() => console.log('DB DATASET connection is successful! '))

/* Not work yet
const db2 = mongoose.createConnection(
  process.env.DATABASE_LOCAL2,
  mongooseOptions
).then( () => console.log('DB2 connection is successful!'))
*/
const port = config.parsed.PORT || 3000

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on poart ${port}`))

module.exports = app
