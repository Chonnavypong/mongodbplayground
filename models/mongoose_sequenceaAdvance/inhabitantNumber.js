const mongoose = require('mongoose')

const AutoIncrement = require('mongoose-sequence')(mongoose)

const schema = new mongoose.Schema({
  name: String,
  country: String,
  city: String,
  inhabitant_number: Number
})

schema.plugin(AutoIncrement, {
  id: 'inhabitant_seq',
  inc_field: 'inhabitant_number',
  reference_fields: ['country', 'city']
})

module.exports = mongoose.model('Inhabitant', schema)
