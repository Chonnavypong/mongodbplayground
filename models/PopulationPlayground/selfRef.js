const mongoose = require('mongoose')

const { Schema } = mongoose

const baseOptions = {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}

const schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      require: true
    },
    parent: {
      type: mongoose.Schema.ObjectId,
      // ใช้ไม่ได้แบบนี้ ต้องเปลี่ยนเป็น String ถึงจะ populate ค่าของ parent ออกมาได้
      // type: String,
      trim: true,
      default: null,
      ref: 'selfRef'
    }
  },
  baseOptions
)

schema.pre(/^find/, function(next) {
  this.populate({
    path: 'parent',
    select: 'name -parent'
  })
  next()
})

module.exports = mongoose.model('selfRef', schema)
