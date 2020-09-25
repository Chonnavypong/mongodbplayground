const ZipCode = require('../../../models/DATASET/locaZipCodes/ZipCode')

exports.createOne = async (req, res, next) => {
  try {
    const doc = await ZipCode.create(req.body)
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
    const stat = await ZipCode.aggregate([
      {
        $match: { state: 'NY' }
      },
      {
        $project: {
          _id: 0,
          city: 1,
          pop: 1
        }
      }
    ])
    res.status(201).json({
      status: 'success',
      docNo: stat.length,
      doc: stat
    })
  } catch (error) {
    res.json({
      status: 'error',
      code: error.code,
      message: error.message
    })
  }
}
