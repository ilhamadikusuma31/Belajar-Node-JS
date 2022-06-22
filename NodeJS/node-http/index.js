const h = require('http');

const fs = require('fs'); //fs = file system
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = h.createServer((req, res) => {
    // console.log(req.headers);

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Bootstrap demo</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></head><body><h1>Hello, world!</h1><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script></body></html>');

    console.log("Request untuk " + req.url + " Methodnya " + req.method);
    if (req.method == "GET") {
        //ini mirip routing di laravel
        let fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;


        let filePath = path.resolve('./public' + fileUrl);
        const fileExtension = path.extname(filePath);


        if (fileExtension == '.html') {
            fs.exists(filePath, (exist) => {

                if (!exist) {
                    res.statusCode = 404;
                    res.statusHeader('Content-Type', 'text/html');
                    res.end("error bos")
                    return;
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);

            })
        }
        //kalo bukan html
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl +
                ' not a HTML file</h1></body></html>');

        }

        //kalo bukan method GET
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method +
            ' not supported</h1></body></html>');

    }




});

server.listen(port, hostname, () => {
    console.log(`server berjalan di ${hostname}:${port}`);
})