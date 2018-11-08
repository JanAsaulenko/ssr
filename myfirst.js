var http = require('http');
var date = require('./firstmodule');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');
http.createServer(function (req, res) {
    var parseUrl = url.parse(req.url, true);
    var fileName = '.' + parseUrl.pathname;
    console.log(fileName);
    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write('404 not found')
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html;'});
            res.write(uc(data));
        }
        res.end()
    })
    // fs.appendFile('myNewFile.txt','yaya bithes', function (err) {
    //   if(err) throw err;
    //     console.log('Saved');
    //   res.writeHeader(200, {'Content-type':'text/html'});
    //   res.write('saved');
    //   res.end()
    //
    // })
    // fs.readFile('index.html', function (error,data) {
    //     res.writeHeader(200, {'Content-Type':'text/html'})
    //     data ? res.write(data) : res.write(error);
    //     res.end();
    // })
    //  res.writeHead(200, {'Content-Type':'text/html'});
    // var parseUrl = url.parse(req.url, true).query;
    //      var result = parseUrl.year + ' ' + parseUrl.month;
    //      res.write(result)
}).listen(8080);