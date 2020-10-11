const mongoose = require('mongoose')
const AppError = require('../../utils/appError')

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


// schema.pre('validate', function(next){
//   if (this.validator_seq > 3){
//     const err = new AppError('ERROR FROM PRE VALIDATE', 400)
//     next(err)
//   } else {
//     next()
//   }
// })

module.exports = mongoose.model('Validator2', schema)
