const InhabitantModel = require('../../models/mongoose_sequenceaAdvance/inhabitantNumber')

exports.test = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'MONGOOSE SEQUENCE TEST PAGE'
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
    const doc = await InhabitantModel.create(req.body)
    res.status(201).json({
      status: 'success',
      doc
    })
    // console.log(req.body)
  } catch (error) {
    res.json({
      status: 'error',
      code: error.code,
      message: error.message
    })
  }
}
