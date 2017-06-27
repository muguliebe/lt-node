const express = require('express')
const router = express.Router()
import Transaction from '../model/transaction'

router.get('/api', (req,res) => {
  res.json(`alive with ${process.env.NODE_ENV}`)
})

router.get('/api/test', (req, res) => {
  console.log('/test start')
  res.json(`good job`)
})

router.get('/api/transactions', (req, res) => {
  Transaction.find().exec()
    .then(result => {
      res.json(result)
    }).catch(err => {
      console.error('transaction find err:', err)
    })
})

// export default router
module.exports = router
