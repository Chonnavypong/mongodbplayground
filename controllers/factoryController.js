const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')
const APIFeatures = require('../utils/apiFeatures')

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id)

    if (!doc) {
      return next(new AppError('No document found with that ID', 404))
    }
    res.status(204).json({
      status: 'success',
      data: null
    })
  })

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    if (!doc) {
      return next(new AppError('No document found with that ID', 404))
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    })
  })

exports.createOne = (Model, Options) =>
  catchAsync(async (req, res, next) => {
    if (Options) {
      const { controlledCondition } = Options
      console.log(controlledCondition)
      const findDoc = await Model.find(controlledCondition)
      console.log(findDoc)
      if (findDoc.length > 0) {
        const err = new AppError(
          'Category has reach the limit. Please reOranize your category.',
          400
        )
        return next(err)
      }
    }

    const doc = await Model.create(req.body)
    console.log(doc)

    if (Options) {
      const { counterField } = Options
      doc.setNext(counterField, (err, data) => {
        if (!err) {
          res.status(201).json({
            status: 'success',
            data: {
              data: doc
            }
          })
        } else if (err) {
          console.log(err)
          const newErr = new AppError('Auto Increment Field has failed', 400)
          next(newErr)
        }
      })
    } else {
      res.status(201).json({
        status: 'success',
        data: {
          data: doc
        }
      })
    }
  })

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id)

    if (popOptions) query = query.populate(popOptions)

    const doc = await query

    console.log('DOC -> ', doc)

    if (!doc) {
      const err = new AppError('No document found with that ID', 404)
      return next(err)
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    })
  })

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on tour (hack)
    let filter = {}

    // Note: Model.find ภายใน APIFeatures จะได้ parent = null ทั้งหมด ต้องแก้ไข ต่างจาก Model.find({}) ภายนอก APIFeatures จะได้ ObjectId ของ parent ออกมาด้วย
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate()

    // const doc = await features.query.explain()
    const doc = await features.query

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    })
  })

exports.nestedCreateOne = (Model, req, res, next) => {
  console.log('In Nested Create One', Model)
  return async (req, res, next) => {
    try {
      console.log('Hello')
      console.log(req.originalUrl)
      console.log('Model is ', Model)
      const doc = await Model.create(req.body)
      next()
      // res.status(200).json({
      //   status: 'success',
      //   // url: req.originalUrl,
      //   // params: req.params,
      //   doc
      // })
    } catch (error) {
      next(error)
    }
  }
}
