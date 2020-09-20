const Product = require('../../models/PopulationPlayground/product')

exports.createOne = async (req, res, next) => {
  try {
    const doc = await Product.create(req.body)
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
    const doc = await Product.find()
    // เนื่องจาก ทำการ populated ใน pre hooks middleware แล้ว จึง comment populate function ด้านล่างออก
    // .populate({
    //   path: 'refModel',
    //   select: 'body -_id'
    // })
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
