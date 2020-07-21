const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const schemaOptions = {
  timestamps: true,
  discriminatorKey: 'userType',
  collection: 'userDiscriminator',
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true
    },
    last: {
      type: String,
      trim: true,
      lowercase: true
    },
    seqUser: {
      type: Number
    }
  },
  schemaOptions
)

schema.plugin(AutoIncrement, {
  id: 'counter_User_id',
  inc_field: 'seqUser'
})

schema.index(
  {
    last: 1,
    name: 1
  },
  {
    unique: true
  }
)

module.exports = mongoose.model('User', schema)
