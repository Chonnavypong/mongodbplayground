const Base = require('../../models/nestedRoute/nestedRouteWithDiscriminaotrs_1')
const Extended = require('../../models/nestedRoute/nestedRouteWithDiscriminaotrs_2')
const factory = require('../factoryController')

let Model

exports.createOne = (req, res, next) => {
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
    const doc = factory.nestedCreateOne(Model)(req, res, next)
    console.log('DOC is', doc.then((el) => 
      res.json({
        data: el
      })
    ))
    // const doc = await Model.create(req.body)
    // res.status(200).json({
    //   status: 'success',
    //   url: req.originalUrl,
    //   params: req.params,
    //   doc
    // })
    next()
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
