const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    let url = req.url;
    console.log(req);
    switch (url) {
        case '/about':
            res.write('<h1>ini adalah halaman about</h1>');

            break;
        case '/home':
            res.write('<h1>ini adalah halaman home</h1>');
            break;


            // route default-nya
        default:
            // res.write('<h1>ini adalah halaman default</h1>');
            fs.readFile('./index.html', (e, penampung) => { //ini kayak file handling
                if (e) {
                    res.writeHead(404);
                    res.write('error boskuh');
                } else {
                    res.write(penampung); //nampilin ke web
                }

                res.end();
            });
            break;

    }


    // res.write('<h1>heloo</h1>');
    // res.end();
});

server.listen(port, () => {
    console.log(`server berjalan di port ${port}`);
});