// const Model = require('../../../models/DATASET/training/weather')

const schema = require('../../../models/DATASET/training/weather')

const conn = require('../../../configs/db')

const { conn2 } = conn

const Model = conn2.model('weather', schema)

// exports.testz = (req, res, next) => {
//     try {
//       res.status(200).json({
//         status: 'success',
//         message: 'Weather TEST PAGE'
//       })
//     } catch (error) {
//       res.status(404).json({
//         status: 'error',
//         code: error.code,
//         message: error.message
//       })
//     }
//   }

exports.getAll = async (req, res, next) => {
  try {
    const doc = await Model.find().limit()

    // const doc = await Model.aggregate([
    //   {
    //     $match: {
    //       superman: 'YES I AM'
    //     }
    //   }
    // ])
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
exports.getOne = async (req, res, next) => {
  try {
    // console.log(req.params.id)
    const doc = await Model.find({ _id: req.params.id })

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
