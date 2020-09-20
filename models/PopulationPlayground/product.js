const mongoose = require('mongoose')

const { Schema } = mongoose

const schemaOptions = {
  toJSON: {
    virtuals: true
  }
}

const schema = Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true
    }
  },
  schemaOptions
)

// pre(/^find/, function(next) {...} )ไม่ต้องใช้  execPopulate() เนื่องจาก เรายังไม่ได้ document ออกมา ต่างจาก pre('save')ที่เราได้ document ออกมา (this)
schema.pre(/^find/, function(next) {
  // eslint-disable-next-line no-console
  this.populate({
    path: 'refModel',
    select: 'body -refModel'
  })

  next()
})

schema.virtual('refModel', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'refModel'
  // ,count: true
})

module.exports = mongoose.model('Product', schema)
