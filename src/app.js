require('source-map-support').install();
var http = require('http');
var port = process.env.PORT || 8080
import DateUtils from './modules/date'

console.log('start')
http.createServer(function (req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!!!' + DateUtils.myDate());
  } else if (req.method === 'GET' && req.url === '/test') {
    res.statusCode = 200
    res.end('good job')
  } else {
    res.statusCode = 404
    res.end()
  }
}).listen(port);
