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
      require: true
    },
    parent: {
      // type: mongoose.Schema.ObjectId,
      // ใช้ไม่ได้แบบนี้ ต้องเปลี่ยนเป็น String ถึงจะ populate ค่าของ parent ออกมาได้
      type: String,
      trim: true,
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

schema.index({ parent: 1, name: 1 }, {unique: true})

schema.virtual('parentCategory', {
  ref: 'Category',
  foreignField: 'parent',
  localField: '_id'
})

// Populate เอาค่าของ Parent ออกมา ก่อน SAVE data
schema.pre('save', async function(next) {
  const doc = await this.populate({
    path: 'parent'
  }).execPopulate()
  
  if (this.parent === null && this.category_seq !== undefined) {
    if (this.category_seq.toString().length == 1){
      this.categoryId = `0${this.category_seq}`
    }
    if (this.category_seq.toString().length == 2){
      this.categoryId = `${this.category_seq}`
    }
    if (this.category_seq.toString().length > 2){
      next()
    }
  }
  if (this.parent !== null && this.category_seq !== undefined) {
    if (this.category_seq.toString().length == 1) {
      this.categoryId = `${doc.parent.categoryId}0${this.category_seq}`
    }
    if (this.category_seq.toString().length == 2) {
      this.categoryId = `${doc.parent.categoryId}${this.category_seq}`
    }
  }
  next()
})
/*
schema.pre('save', function(next){
  if (true) {
    console.log('First next calling')
    return next() // แบบนี้จะออกจาก function ไม่ไปทำงานต่อ
    // next() แบบนี้จะยังคงไปทำงานตาม code ด้านล่างต่อจนจบ function ( เรียก After Next)
  }
  console.log('After Next')
})
*/

/*
post hook เมื่อมี parameters มากกว่า 2 ตัว ทดสอบการเรียก next() function
*/ 
/*
schema.post('save', function(doc, next) {
  setTimeout(function(){
    console.log('POST 1')
    next()
  }, 10)
})

schema.post('save', function(doc, next){
  console.log('POST 2')
  next()
})

schema.post('init', function(doc){
  console.log('%s has been initialized form the db', doc._id)
})

schema.post('validate', function(doc){
  console.log('%s has been validated ( but not saved yet) ', doc._id
  )
})

schema.post('save', function(doc){
  console.log('%s has been saved', doc._id)
})

schema.post('remove', function(doc){
  console.log('%s has been removed', doc._id)
})
*/

// Error Hanling Middleware
schema.post('save', function(error, doc, next){
  if (error.name === 'MongoError' && error.code === 11000) {
    next( new Error('There was duplicate key error'))
  } else {
    next()
  }
})

schema.plugin(AutoIncrement, {
  id: 'category_counter',
  inc_field: 'category_seq',
  disable_hooks: true,
  reference_fields: ['parent']
})

module.exports = mongoose.model('Category', schema)
