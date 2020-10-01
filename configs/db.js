const mongoose = require('mongoose')
/*
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)
*/

// const DB_DATASET = process.env.MONGODB_WEATHER.replace(
//   '<PASSWORD>',
//   process.env.MONGODB_DATASET_PASSWORD
// )

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}

// Multi-Connection
/* 
@ Syntax:-
# const conn = mongoose.createConnection('mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]', options);
 
Note. model ต้อง export schema แทน model
If you use multiple connections, you should make sure you export schemas, not models. Exporting a model from a file is called the export model pattern. The export model pattern is limited because you can only use one connection.

example:-
const userSchema = new Schema({ name: String, email: String });

// The alternative to the export model pattern is the export schema pattern.
module.exports = userSchema;

// Because if you export a model as shown below, the model will be scoped
// to Mongoose's default connection.
// module.exports = mongoose.model('User', userSchema);
*/

const conn1 = mongoose.createConnection(
  process.env.DATABASE_LOCAL1,
  mongooseOptions
)

const conn2 = mongoose.createConnection(
  process.env.DATABASE_LOCAL3,
  mongooseOptions
)

/*
mongoose
  .connect(process.env.DATABASE_LOCAL3, mongooseOptions)
  // eslint-disable-next-line no-console
  .then(() => console.log('LOCAL DB 3 connection is successful! '))
*/
/*
 * CONNECT TO mongoDB database dataset for aggregation practice
 */
// .connect(DB_DATASET, mongooseOptions)
// // eslint-disable-next-line no-console
// .then(() => console.log('DB DATASET connection is successful! '))

exports.conn1 = conn1
exports.conn2 = conn2
