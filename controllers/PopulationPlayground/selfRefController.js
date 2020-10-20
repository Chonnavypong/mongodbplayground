const Model = require('./../../models/PopulationPlayground/selfRef')
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
// exports.getAll = async (req, res, next) => {
//   try {
//     const doc = await Model.find(req.query).populate({
//       path: 'parent',
//       select: 'name'
//     })
//     res.status(201).json({
//       status: 'success',
//       length: doc.length,
//       doc
//     })
//   } catch (error) {
//     res.json({
//       status: 'error',
//       code: error.code,
//       message: error.message
//     })
//   }
// }