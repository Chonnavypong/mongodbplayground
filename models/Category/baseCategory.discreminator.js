const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const baseOptions = {
  timestamps: true,
  // discriminatorKey: 'categoryType', // our discriminator key, could be anything
  // collection: 'productCategory', // the name of our collection
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      require: true,
      unique: true
    },
    parent: {
      // type: mongoose.Schema.ObjectId,
      // ใช้ไม่ได้แบบนี้ ต้องเปลี่ยนเป็น String ถึงจะ populate ค่าของ parent ออกมาได้
      type: String,
      trim: true,
      lowercase: true,
      default: null,
      ref: 'Category'
    },
    categoryId: {
      type: String,
      default: '0000'
    },
    category_seq: {
      type: Number
    }
  },
  baseOptions
)

schema.plugin(AutoIncrement, {
  id: 'category_counter',
  inc_field: 'category_seq',
  disable_hooks: true,
  reference_fields: ['parent']
})

schema.pre('save', function(next) {
  console.log('CONSOLE THIS NAME -> ', this.name)
  // if (this.parent === null) {
  //   this.categoryId = `${this.category_seq.toString()}00`
  // }
  console.log('A : ',typeof(this.category_seq), this.category_seq)
  console.log(this.categoryId)
  next()
})

schema.post('save', function(next) {
  console.log(this.category_seq)
})


module.exports = mongoose.model('Category', schema)
