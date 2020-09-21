const ClickedEvent = require('../../models/Discriminator/ClickedLinkEvent')

exports.createOne = async (req, res, next) => {
  try {
    const doc = await ClickedEvent.create(req.body)
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
    // ตัวอย่างนี้ เทียบกับใน productController คัวอย่างนี้ไม่ได้ทำการ populate ใน pre hooks middleware จึงต้อง chian populate function ใน EventController นี้แทน
    const doc = await ClickedEvent.find()
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
