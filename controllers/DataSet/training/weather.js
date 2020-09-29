const Model = require('../../../models/DATASET/training/weather')

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