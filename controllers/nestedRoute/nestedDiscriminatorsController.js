const Base = require('../../models/nestedRoute/nestedRouteWithDiscriminaotrs_1')
const Extended = require('../../models/nestedRoute/nestedRouteWithDiscriminaotrs_2')

let Model

exports.createOne = async (req, res, next) => {
  try {
    console.log('nested Base origin url', req.originalUrl)
    const endUrl = req.originalUrl.split('/').pop()
    switch(endUrl) {
      case 'nestedExtend': 
        Model = Extended
        break
      case 'nestedBase': 
        Model = Base
        break
    }
    const doc = await Model.create(req.body)
    res.status(200).json({
      status: 'success',
      url: req.originalUrl,
      params: req.params,
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
    const doc = await Base.find()
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
