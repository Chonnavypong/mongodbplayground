const StoryModel = require('../../models/PopulationPlayground/Story')

exports.test = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'Story Population TEST PAGE'
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
    const doc = await StoryModel.create(req.body)
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
    // const doc = await StoryModel.find().populate({
    //   path: 'author fans',
    //   select: 'name age -_id'
    // })
    const doc = await StoryModel.find()
      .sort({ title: 1 })
      .populate({
        path: 'fans',
        options: { limit: 5 }
        // perDocumentLimit:
      })
    console.log(doc[0].title, doc[0].fans.length)
    console.log(doc[1].title, doc[1].fans.length)
    console.log(doc[2].title, doc[2].fans.length)
    console.log(doc[3].title, doc[3].fans.length)
    /* .populate({
      path: 'author fans',
      match: { age: { $gt: 21 } },
      select: 'name -_id'
    })*/

    /*
      .exec(function(err, story) {
        story ? console.log('The author %s', story.author.name) : console.log('ERROR')
        if ( story ) {
          story.populate('author')
          ? console.log('1 Author had populated')
          : console.log('Error', err)
          story.depopulate('author')
          console.log(story.author._id)
          story.populate('author') === undefined
            ? console.log('2 Author had populated')
            : console.log('DEPOPULATED')
        }
      })*/
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

exports.getOne = async (req, res, next) => {
  try {
    console.log(req.query)
    const doc = await StoryModel.findOne(req.body).populate('fans')

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
