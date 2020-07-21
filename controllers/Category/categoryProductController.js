const CategoryProduct = require('../../models/Category/categoryProduct')

exports.testRoute = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'Category Product Route - Model Page'
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
    const doc = await CategoryProduct.create(req.body)
    res.status(201).json({
      status: 'success',
      doc
    })
  } catch (err) {
    res.json({
      status: 'error',
      code: err.code,
      message: err.message
    })
  }
}