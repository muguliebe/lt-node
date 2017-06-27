import Transaction from '../model/transaction'
import 'date-utils'

export const allAround = (req, res, next) => {
  console.log(`\n[start] ${req.method} ${req.url}`)
  let startDate = new Date()

  next()

  let endDate = new Date()
  let elapsed = endDate-startDate
  console.log(`[end  ] ${req.method} ${req.url} ${elapsed}ms`)

  let newTran = new Transaction()
  newTran.day = endDate.toFormat('YYMMDD')
  newTran.time = endDate.toFormat('HH24MISS')
  newTran.url = req.url
  newTran.responseTime = elapsed,
  newTran.status = res.statusCode,

  newTran.save().then(result => {
    console.log('transaction saved')
  }).catch(err => {
    console.error('transaction error occured:', err)
  })

  console.log('after save')
}
