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
    const { name, parent } = req.body

    let doc = ''
    await CategoryModel.findOne({name}, async (err, data) => {
      if (data === null) {
        // console.log(`There have no ${name} in your database`)
        let x = await CategoryModel.create({
          name, parent
        }, (err, newData) => { 
          newData.setNext('category_counter')
          // console.log(`NEW DATA ${newData}`)
          return newData
      })
      } else {
        console.log(err)
        next()
      }
    })
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
exports.getAll = async (req, res, next) => {
  console.log(req.query)
  try {
    const doc = await CategoryModel.find({parent: '0'}).populate({
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
