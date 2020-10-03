const AppError = require('../utils/appError')
// สร้าง error middleware ใช้สำหรับ error อื่นๆ ที่ไม่ใช้ operation error

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}.`
  return new AppError(message, 400)
}

const sendErrorDev = (err, res) => {
  console.log('xxxxxxxxxxxx')
  console.log('ERROR DEV -> ',err.name)
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  })
}

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    })
  // Programming or other unknown error: don't leak error details
  } else {
    console.log('ERROR', err)
    res.status(500).json({
      status: 'error',
      message: 'Somthing went very wrong'
    })
  }
}

module.exports = (err, req, res, next) => {
  console.log('GLOBAL HANDLER')

  // console.log(err.stack)

  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  if ( process.env.NODE_ENV === 'development') {
    console.log('DEV')
    sendErrorDev(err, res)
  } else if ( process.env.NODE_ENV === 'production') {
    let error = { ...err }
    if (err.name === 'CastError') error = handleCastErrorDB(error)
    sendErrorProd(error, res)
  }
}
