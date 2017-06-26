require('source-map-support').install()
import http from 'http'
import Server from './server'

console.log('app start')
new Server().start()
