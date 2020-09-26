const Model = require('../../../models/DATASET/training/trainingCompany')

exports.createOne = async (req, res, next) => {
  // try {
  //   const doc = await Model.create(req.body)
  //   res.status(200).json({
  //     status: 'success',
  //     doc
  //   })
  // } catch (error) {
  //   res.json({
  //     status: 'error',
  //     code: error.code,
  //     message: error.message
  //   })
  // }
}

exports.getAll = async (req, res, next) => {
  try {
    // const doc = await Model.find().limit(10)
    const doc = await Model.aggregate([
    //   {
    //   $match : {
    //     category_code: "web",
    //     founded_year: {$gte: 2005, $lt: 2007},
    //     // phone_number: "206.859.6300"
    //   }
    // },
    {
      $project: {
        name: 1,
        numberOfParent: { $cond: {
          if : {
            $isArray: "$parent"
          },
          then: {
            $size: "$parent"
          },
          else: "NA"
        }}
      }
    }
    ])
    res.status(201).json({
      status: 'success',
      length: doc.length,
      doc
    })
  } catch (error) {
      res.staus(404).json({
          status: 'Error',
          message: error.message
      })
  }
}
