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
    app.use(require('./routes/api'))
    app.use(require('./routes/home'))
    app.use(require('./routes/users'))
  }

  start() {
    let port = process.env.PORT || 8080
    console.log(`server start port: ${port}`)
    return app.listen(port)
  }
}
