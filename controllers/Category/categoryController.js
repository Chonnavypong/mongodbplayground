const CategoryModel = require('../../models/Category/baseCategory.discreminator')
const AppError = require('../../utils/appError')

exports.test = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'CATEGORY TEST PAGE'
    })
  } catch (error) {
    res.json({
      status: 'error',
      code: error.code,
      message: error.message
    })
  }
}

exports.createOne = async (req, res, next) => {
  try {
    const { name, parent } = req.body
    /*
* แบบที่ 1 callback function
    let doc = await CategoryModel.findOne({ name }, async (err, data) => {
      if (data === null) {
        // console.log(`There have no ${name} in your database`)
        await CategoryModel.create(
          {
            name,
            parent
          },
          (err, newData) => {
            newData.setNext('category_counter')
            // console.log(`NEW DATA ${newData}`)
          }
        )
      } else {
        console.log(err)
        next()
      }
    })
    res.status(201).json({
      status: 'success',
      doc
    })
  */
    const inDoc = await CategoryModel.find({
      category_seq: { $gt: 99 }
    })

    // eslint-disable-next-line no-console
    console.log('IN DOC : -> ', inDoc)

    if (inDoc.length > 0) {
      const err = new AppError('Over limit', 400)
      return next(err)
    }
    const doc = await CategoryModel.create({ name, parent })
    // eslint-disable-next-line no-console
    console.log('CHECK DOC FROM CONTROLLER : ', doc)
    // eslint-disable-next-line no-unused-vars
    doc.setNext('category_counter', (err, data) => {
      if (!err) {
        res.status(201).json({
          status: 'success',
          doc
        })
      } else {
        next()
      }
    })
  } catch (error) {
    next(error)
  }
}

exports.findOne = async (req, res, next) => {
  try {
    const doc = await CategoryModel.findById(req.params.id).populate({
      path: 'parent',
      select: 'name category_seq'
    })
    // console.log(doc.category_seq)
    res.status(201).json({
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
    if (req.query.parent === 'null') req.query.parent = null
    if (req.query.category_seq === 'undefined')
      req.query.category_seq = undefined

    const doc = await CategoryModel.find(req.query).populate({
      path: 'parent',
      select: 'name category_seq'
    })
    ///console.log(doc)
    res.status(201).json({
      status: 'success',
      length: doc.length,
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
