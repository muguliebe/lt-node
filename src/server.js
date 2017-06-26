import express from 'express'
const app = express()

import * as advice from './modules/advice'

export default class Server {
  constructor() {
    console.log('server setting start')

    app.use(advice.allAround)
    app.get('/', (req,res) => {
      res.json(`alive with ${process.env.NODE_ENV}`)
    })

    app.get('/test', (req, res) => {
      console.log('/test start')
      res.json(`good job`)
    })

  }

  start() {
    let port = process.env.PORT || 8080
    console.log(`server start port: ${port}`)
    return app.listen(port)
  }
}
