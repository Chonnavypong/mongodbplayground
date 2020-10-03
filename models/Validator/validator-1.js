const mongoose = require('mongoose')

const baseOptions = {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}

const schema = new mongoose.Schema(
  {
    validator_seq: {
      type: Number,
      min: 1,
      max: [3, 'MAX Value must less than or equal 3']
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
module.exports = mongoose.model('Validator1', schema)
