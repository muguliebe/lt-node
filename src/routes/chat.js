const express = require('express')
const router = express.Router()

router.get('/chat', (req,res) => {
  res.render('chat', {
    siteTitle: 'express study'
  })
})

module.exports = router
