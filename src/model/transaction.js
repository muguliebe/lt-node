const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const Schema = mongoose.Schema

const schema = new Schema({
  day: String,
  time: String,
  url: String,
  responseTime: Number,
  status: String,
})

const Transaction = mongoose.model('Transaction', schema, 'transaction')
module.exports = Transaction
