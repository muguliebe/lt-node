require('source-map-support').install()
import Server from './server'

console.log('app start')
new Server().start()
