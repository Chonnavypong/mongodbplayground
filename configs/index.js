require('dotenv').config({
  path: './config.env'
})

// eslint-disable-next-line no-console
console.log(process.env.PORT)
module.exports = {
  TESTPORT: process.env.PORT
}