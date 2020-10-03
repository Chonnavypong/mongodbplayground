const Model = require('../../models/Validator/validator-1')
const CatchAsync = require('../../utils/catchAsync')

exports.createOne = async (req, res, next) => {
  try {
    const doc = await Model.create(req.body)
    res.status(201).json({
      status: 'success',
      length: doc.length,
      doc
    })
  } catch (error) {
    // console.log(error.errors.validator_seq.properties.max)
    console.log(error.name)
    res.status(404).json({
      status: 'Error',
      message: error
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
    res.json({
      status: 'Error',
      code: error.code,
      message: error.message
    })
  }
}

// // แบบปรกติ try catch block โดยการผ่าน error ไปกับ next ( next(error) ) ก็สามารถไปเรียก globalErrorHandler ใน app.js ได้
// exports.getByID = async (req, res, next) => {
//   try {
//     const doc = await Model.findById(req.params.id)
//     res.status(200).json({
//       status: 'success',
//       doc
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// แบบที่ 2 ครอบด้วย function CatchAsync
exports.getByID = CatchAsync(async (req, res, next) => {
  console.log(req.params)
  const doc = await Model.findById(req.params.id)
  res.status(200).json({
    status: 'success',
    doc
  })
})
