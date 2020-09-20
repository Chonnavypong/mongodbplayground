const Blog = require('../../models/PopulationPlayground/Blog')

exports.createOne = async (req, res, next) => {
  try {
    const doc = await Blog.create(req.body)
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
    const doc = await Blog.find().populate({
      path: 'refModel',
      select: 'body'
    })
    console.log(doc[0].refModel)
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
