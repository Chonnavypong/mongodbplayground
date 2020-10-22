const Model = require('../../models/PopulationPlayground/arrayPopulate')
const factory = require('../factoryController')

exports.createOne = factory.createOne(Model)
exports.getAll = factory.getAll(Model)
exports.getOne = factory.getOne(Model, {
  path: 'name'
})
