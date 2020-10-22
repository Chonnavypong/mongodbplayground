const Model = require('../../models/PopulationPlayground/selfRef')
const factory = require('../factoryController')

exports.createOne = async (req, res, next) => {
  try {
    const doc = await Model.create(req.body)
    res.status(201).json({
      status: 'success',
      doc
    })
  } catch (error) {
    next(error)
  }
}

exports.getAll = factory.getAll(Model)