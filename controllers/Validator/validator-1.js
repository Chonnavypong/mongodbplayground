/* eslint-disable no-console */
const Model = require('../../models/validator/validator-1')
const CatchAsync = require('../../utils/catchAsync')

exports.createOne = async (req, res, next) => {
  try {
    console.log('Point A')
    const doc = await Model.create(req.body)
    console.log('Point B', doc)
    // eslint-disable-next-line no-unused-vars
    doc.setNext('validator_counter', (err, data) => {
      console.log('Data', data, 'Errro', err)
      if (!err) {
        res.status(201).json({
          status: 'success',
          doc
        })
      } else {
        next()
      }
    })
    // res.status(201).json({
    //   status: 'success',
    //   doc
    // })
  } catch (error) {
    next(error)
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
