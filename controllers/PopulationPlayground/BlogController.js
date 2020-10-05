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
    // ตัวอย่างนี้ เทียบกับใน productController คัวอย่างนี้ไม่ได้ทำการ populate ใน pre hooks middleware จึงต้อง chian populate function ใน BlogController นี้แทน
    const doc = await Blog.find().populate({
      path: 'comments',
      select: 'body'
    })
    // eslint-disable-next-line no-console
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
