const ZipCode = require('../../../models/DATASET/locaZipCodes/ZipCode')

exports.createOne = async (req, res, next) => {
  try {
    const doc = await ZipCode.create(req.body)
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
    const doc = await ZipCode.find()
    // const stat = await ZipCode.aggregate([
    //   {
    //     $match: { state: 'NY' }
    //     $match: { pop: { $gt: 90, $lte: 95 } }
    //   },
    //   {
    //     $project: {
    //       state: '$state',
    //       info: {
    //         city: '$city',
    //         pop: '$pop'
    //       }
    //     }
    //   },
    //   {
    //     $group: {
    //       _id: '$state',
    //       totalCityInState: { $sum: 1 },
    //       totolPop: { $sum: '$info.pop' },
    //       maxPop: {$max: "$info.pop"},
    //       minPop: { $min: "$info.pop"},
    //       avgPop: { $avg: "$info.pop"},
    //       cities: { $addToSet: '$info.city' }
    //     }
    //   }
    //   // {
    //   //   $group: {
    //   //     _id: "$state",
    //   // totalCityInState: { $sum: 1},
    //   // cities: { $addToSet: "$city"},
    //   // totolPop: { $sum: "$pop"}
    //   //   }
    //   // },
    //   // {
    //   //   $project: {
    //   //     info: {
    //   //       city: "$city",
    //   //       pop: "$pop"
    //   //     }
    //   //   }
    //   // }
    //   // {
    //   //   $project: {
    //   //     _id: 0,
    //   //     city: 1,
    //   //     pop: 1
    //   //   }
    //   // }
    //   // {
    //   //   $project: {
    //   //     cities: 1,
    //   //   }
    //   // },
    //   ,{
    //     $sort: {
    //       totalCityInState: 1,
    //       // _id: 1
    //     }
    //   }
    // ])
    res.status(201).json({
      status: 'success',
      // docNo: stat.length,
      // doc: stat
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
