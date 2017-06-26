import express from 'express'
const app = express()

import * as advice from './modules/advice'

export default class Server {
  constructor() {
    console.log('server setting start')

    // =========================================================================
    // set environments
    app.set('view engine', 'ejs');
    app.set('views', 'src/views');
    app.use(express.static('app/public'));

    // =========================================================================
    // filter
    app.use(advice.allAround)

    // =========================================================================
    // routes bind
    app.get('/', (req, res) => {
      res.render('home')
    })

    app.get('/api/', (req,res) => {
      res.json(`alive with ${process.env.NODE_ENV}`)
    })

    app.get('/api/test', (req, res) => {
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
