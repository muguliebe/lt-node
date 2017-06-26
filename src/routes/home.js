const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
  res.render('home', {
    siteTitle: 'express study',
    message: 'good job'
  })
})

module.exports = router
