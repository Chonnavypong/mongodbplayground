const mongoose = require('mongoose')
const AppError = require('../../utils/appError')
const AutoIncrement = require('mongoose-sequence')(mongoose)


const baseOptions = {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}

const schema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    validator_seq: {
      type: Number,
      max: [3, 'category have limit at 3']
    }
  },
  baseOptions
)

// หากเกิด error ก่อน จะ console.log เฉพาะ 'this gets printed first' ครั้งแรกเท่านั้น
/* 
// ลำดับการทำงาน
schema.pre('validate', function() {
  console.log('this gets printed first')
})
schema.post('validate', function() {
  console.log('this gets printed second')
})
schema.pre('save', function() {
  console.log('this gets printed third')
})
schema.post('save', function() {
  console.log('this gets printed fourth')
})
*/

<<<<<<< HEAD
schema.pre('validate', function(next) {
  if (this.validator_seq > 3) {
    const err = new AppError('ERROR FROM PRE VALIDATE', 400)
=======
schema.pre('validate', function(next){
  if (this.validator_seq > 3){
    const err = new AppError('ERROR FROM PRE VALIDATE validator-1', 400)
>>>>>>> 0e5d003f70acea41870cda821d5c078efe1f1b9d
    next(err)
  } else {
    next()
  }
})

// schema.pre('save', function(next) {
//   console.log('Pre save', this.validator_seq)
//   if (this.validator_seq !== undefined) {
//     next()
//   }
//   next()
// })

schema.plugin(AutoIncrement, {
  id: 'validator_counter',
  inc_field: 'validator_seq',
  disable_hooks: true
})

module.exports = mongoose.model('Validator1', schema)
