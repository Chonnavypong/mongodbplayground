const BaseModel = require('../../models/Products/baseProduct.discreminator')

exports.testRoute = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'Bese Route - Model Page'
    })
  } catch (err) {
    res.json({
      status: 'error',
      code: err.code,
      message: err.message
    })
  }
}

exports.createOne = async (req, res, next) => {
  try {
    const doc = await BaseModel.create(req.body)
    console.log('BASE MODEL : -> ', req.body)
    res.status(201).json({
      status: 'success',
      doc
    })
  } catch (error) {
    res.json({
      status: 'error',
      code: error.code,
      message: error.message
    })
  }
}

exports.getAll = async (req, res, next) => {
  try {
    const doc = await BaseModel.find()
    res.status(201).json({
      status: 'success',
      doc
    })
  } catch (error) {
    res.json({
      status: 'error',
      code: error.code,
      message: error.message
    })
  }
}
