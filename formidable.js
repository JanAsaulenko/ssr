var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url === '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/yasaulenko/WebstormProjects/firstnode/' + files.filetoupload.name;

            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            })
        })
    }
    else {
        res.write('<form action="fileupload" method="post"  enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload">');
        res.write('<input type="submit"> ');
        res.write('<form>');
        return res.end()
    }
}).listen(8080);