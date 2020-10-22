const NestedR1Model = require('../../models/nestedRoute/nestedR1')

exports.createOne = async (req, res, next) => {
  try {
    const doc = await NestedR1Model.create(req.body)
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
    const doc = await NestedR1Model.find()
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
