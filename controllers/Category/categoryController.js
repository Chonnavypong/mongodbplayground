const CategoryModel = require('../../models/Category/baseCategory.discreminator')

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
    const doc = await CategoryModel.create(req.body)
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

exports.findOne = async (req, res, next) => {
  try {
    const doc = await CategoryModel.findById(req.params.id).populate({
      path: 'parent',
      select: 'name category_seq'
    })
    ///console.log(doc)
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
