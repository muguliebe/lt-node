const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/users', (req,res) => {

  fetch('https://api.github.com/users')
    .then(function(res) {
        return res.json()
    }).then(function(json) {
      res.render('users', {
        users: json
      })
    }).catch(err => {
      console.error(err)
    })

})

module.exports = router
