const Model = require('../../../models/DATASET/training/posts')

exports.getAll = async (req, res, next) => {
  try {
    // const doc = await Model.find()
    const doc = await Model.aggregate([
      // {
      //     $match: {title: "US Constitution"}
      // },
      {
        $project: {
          // title: 1,
          author: 1
          // tags: 1
        }
      }
    ])
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
