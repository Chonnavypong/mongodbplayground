/* eslint-disable no-console */
const Model = require('../../models/validator/validator-2')
const CatchAsync = require('../../utils/catchAsync')

// exports.createOne = async (req, res, next) => {
//   try {
//     const doc = await Model.create(req.body)
//     res.status(201).json({
//       status: 'success',
//       length: doc.length,
//       doc
//     })
//   } catch (err) {
//     // console.log(error.errors.validator_seq.properties.max)
//     // console.log(err.errors.validator_seq.kind)
//     res.status(404).json({
//       status: 'err',
//       message: err.message,
//       error: err.errors,
//       stack: err.stack
//     })
//   }
// }

exports.createOne = async (req, res, next) => {
  try {
    console.log('Point A')
    const doc = await Model.create(req.body)
    console.log('Point B')
    res.status(201).json({
      status: 'success',
      doc
    })
  } catch (err) {
    next(err)
  }
}

exports.getAll = CatchAsync(async (req, res, next) => {
  const doc = await Model.find().limit(10)
  res.status(200).json({
    status: 'success',
    length: doc.length,
    doc
  })
})

exports.getOne = async (req, res, next) => {
  try {
    const { id } = req.params
    const doc = await Model.findById(id)
    res.status(200).json({
      status: 'success',
      doc
    })
  } catch (err) {
    next(err)
  }
}
