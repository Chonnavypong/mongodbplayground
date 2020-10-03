const Model = require('../../models/Validator/validator-1')
const CatchAsync = require('../../utils/catchAsync')

<<<<<<< HEAD
=======
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

>>>>>>> 72f0f15a1d32cc8f930309915ce969d526ec5d08
exports.createOne = async (req, res, next) => {
  try {
    const doc = await Model.create(req.body)
    res.status(201).json({
      status: 'success',
      length: doc.length,
      doc
    })
<<<<<<< HEAD
  } catch (error) {
    // console.log(error.errors.validator_seq.properties.max)
    console.log(error.name)
    res.status(404).json({
      status: 'Error',
      message: error
=======
  } catch (err) {
    next(err)
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
>>>>>>> 72f0f15a1d32cc8f930309915ce969d526ec5d08
    })
  }
}

<<<<<<< HEAD
exports.getAll = async (req, res, next) => {
  try {
    const doc = await Model.find().limit(10)
=======
exports.getOne = async (req, res, next) => {
  try {
    const { id } = req.params
    const doc = await Model.findById(id)
>>>>>>> 72f0f15a1d32cc8f930309915ce969d526ec5d08
    res.status(200).json({
      status: 'success',
      length: doc.length,
      doc
    })
<<<<<<< HEAD
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
=======
  } catch (err) {
    next(err)
  }
}
>>>>>>> 72f0f15a1d32cc8f930309915ce969d526ec5d08
