const Comment = require('../../models/PopulationPlayground/Comment')

exports.createOne = async (req, res, next) => {
  try {
    const doc = await Comment.create(req.body)
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
    // const doc = await Comment.find().populate('refModel')
    const doc = await Comment.find()
    console.log(doc[0].refModel.name)
    console.log(doc[1].refModel.title)
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
