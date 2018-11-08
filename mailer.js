var nodemailer = require('nodemailer');
var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jasdevelopervin@gmail.com',
        pass: '671279tn'
    }
});

http.createServer(function (req, res) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    var parsedURL = url.parse(req.url, true).query;

    var indexFile = path.resolve('./build.index.html');
    console.log(indexFile);
    // var mailOptions = {
    //     from: 'jasdevelopervin@gmail.com',
    //     to: parsedURL.email,
    //     subject: 'Hello Roman! Unfortunately i ant want to regret you  that ',
    //     text: 'That was easy!'
    // }
    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     }
    //     else {
    //         console.log(info.response);
    //     }
    // })
    //     if(err){
    //
    //         res.write('404 not found')
    //     }
    //     else{
    //         var mailOptions = {
    //             from: 'jasdevelopervin@gmail.com',
    //             to:'asaulenkojan@gmail.com',
    //             subject: 'Hello Roman! Unfortunately i ant want to regret you  that ',
    //             text: 'That was easy!'
    //         };
    //         transporter.sendMail(mailOptions, function (error, info){
    //             if(error){
    //                 console.log(error);
    //             }
    //             else{
    //                 console.log('Email sent'+ info.response);
    //             }
    //
    //         });
    //     }
    // })
}).listen(8888);




