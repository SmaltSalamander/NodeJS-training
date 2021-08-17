// require = include
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res)
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello World!\nThe date and time are currently: " + dt.myDateTime());
  res.end('First JavaScript lesson of mine.');
}).listen(8080); 