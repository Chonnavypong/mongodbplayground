require('dotenv').config({
  path: './../config.env'
})

module.exports = {
  NODE_PORT: process.env.NODE_PORT,
  DOMAIN: process.env.DOMAIN,

  MONGODB_URI: process.env.MONGODB_URI,
  MONGODB_LOCAL: process.env.MONGODB_LOCAL,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD
}
