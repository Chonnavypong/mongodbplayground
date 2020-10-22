const NestedR1Mode2 = require('../../models/nestedRoute/nestedR2')

exports.createOne = async (req, res, next) => {
  try {
    const doc = await NestedR1Mode2.create(req.body)
    res.status(200).json({
      status: 'success',
      url: req.originalUrl,
      params: req.params,
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
    const doc = await NestedR1Mode2.find()
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
