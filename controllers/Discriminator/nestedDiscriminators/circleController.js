const Circle = require('../../../models/Discriminator/nestedDiscriminators/Circle')

exports.createOne = async (req, res, next) => {
  try {
    const doc = await Circle.create(req.body)
    res.status(200).json({
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
    const doc = await Circle.find()
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
