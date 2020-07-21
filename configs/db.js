const mongoose = require('mongoose')
const config = require('./../config')
console.log('CONFIGS -> ', config)

const DB = config.MONGODB_URI.replace('<PASSWORD>', config.DATABASE_PASSWORD)
// console.log(DB)
// console.log(config.DATABASE_PASSWORD)
mongoose
  .connect(config.MONGODB_LOCAL, {
    // .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection is successful! '))

mongoose.connection.on('connected', function() {
  console.log('Mongoose default connection open')
})

mongoose.connection.on('error', function(err) {
  console.log('Mongoose default connection error: ' + err)
})

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose default connection disconnected')
})

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log(
      'Mongoose default connection disconnected through app termination'
    )
    process.exit(0)
  })
})
