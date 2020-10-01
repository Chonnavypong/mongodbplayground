// const Model = require('../../../models/DATASET/training/trainingGrades')

const schema = require('../../../models/DATASET/training/trainingGrades')

const conn = require('../../../configs/db')

const { conn1 } = conn

const Model = conn1.model('grade', schema)

exports.createOne = async (req, res, next) => {
  try {
    const doc = await Model.create(req.body)
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
    const doc = await Model.find().limit(10)

    res.status(200).json({
      status: 'success',
      length: doc.length,
      doc
    })
  } catch (error) {
    res.status(404).json({
      status: 'Error',
      message: error.message
    })
  }
}
