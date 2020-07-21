const User = require('./../models/BasicModel/User')

exports.createOne = async (req, res, next) => {
  const { name, last } = req.body
  try {
    // await User.find({ last }, async (err, data) => {
    //   console.log(data), next()
    // })
    const doc = await User.create(req.body)
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
