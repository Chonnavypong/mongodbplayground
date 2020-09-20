const Person = require('../../models/PopulationPlayground/Person')

exports.createOne = async (req, res, next) => {
  try {
    //   const person = new Person({
    //     name: req.body.name,
    //     age: req.body.age
    //   })
    //   const doc = await person.save()
    const doc = await Person.create(req.body)
    res.status(200).json({
      status: 'success',
      doc
    })
  } catch (error) {
    res.json({
      status: 'error',
      message: error.message
    })
  }
}

exports.getAll = async (req, res, next) => {
  try {
    const doc = await Person.find().populate('stories')
    res.status(201).json({
      status: 'success',
      doc
    })
  } catch (error) {
    res.json({
      status: 'error',
      message: error.message
    })
  }
}

exports.getOne = async (req, res, next) => {
  try {
    console.log(req.query)
    const doc = await await Person.findOne(req.query).populate({
      path: 'stories'
      // populate: {path: 'fans'}
    })
    res.status(201).json({
      status: 'success',
      doc
    })
  } catch (error) {
    res.json({
      status: 'error',
      message: error.message
    })
  }
}
