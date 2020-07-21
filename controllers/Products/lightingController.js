const Lighting = require('../../models/Products/lightingModel')

exports.testRoute = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'Lighting Route - Model Page'
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
    const doc = await Lighting.create(req.body)
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
    const doc = await Lighting.find()
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
