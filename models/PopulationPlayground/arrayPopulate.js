// array of car.js test populate array

const mongoose = require('mongoose')

const { Schema } = mongoose

const schemaOptions = {
  toJSON: {
    virtuals: true
  }
}

const schema = Schema(
  {
    member: [
      {
        name: {
          type: mongoose.Schema.ObjectId,
          ref: 'selfRef'
        },
        score: Number
      }
    ]
  },
  schemaOptions
)

schema.pre(/^find/, function(next) {
  this.populate({
    path: 'member.name'
  })
  next()
})

module.exports = mongoose.model('Arraypopulate', schema)
