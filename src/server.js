import express from 'express'
const app = express()

import * as advice from './modules/advice'
const io = require('socket.io')()

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

    // =========================================================================
    // add socket.io
    io.attach(server)
    io.on('connection', (socket) => {
      console.log('User Connected')
      socket.on('disconnect', () => {
        console.log('User Disconnected')
      })

      socket.on('postMessage', (data) => {
        io.emit('updateMessages', data)
      })
    })

    return server
  }

}
