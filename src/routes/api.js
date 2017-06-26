const express = require('express')
const router = express.Router()

router.get('/api', (req,res) => {
  res.json(`alive with ${process.env.NODE_ENV}`)
})

router.get('/api/test', (req, res) => {
  console.log('/test start')
  res.json(`good job`)
})

// export default router
module.exports = router
