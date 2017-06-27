import express from 'express'
const app = express()

import * as advice from './modules/advice'

import socketio from 'socket.io'
const io = socketio()

export default class Server {
  constructor() {
    console.log('server setting start')

    // =========================================================================
    // set environments
    app.set('view engine', 'ejs');
    app.set('views', 'src/views');
    app.use(express.static('src/public'));

    // =========================================================================
    // filter
    app.use(advice.allAround)

    // =========================================================================
    // routes bind
    app.use(require('./routes/api'))
    app.use(require('./routes/home'))
    app.use(require('./routes/users'))
    app.use(require('./routes/chat'))

  }

  start() {
    let port = process.env.PORT || 8080
    console.log(`server start port: ${port}`)

    // =========================================================================
    // listen
    let server = app.listen(port)

    return server
  }

}
