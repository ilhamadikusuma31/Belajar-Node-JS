const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/tentang', (req, res) => {
    res.send('ini halaman tentang');
});

app.get('/kontak', (req, res) => {
    res.send('ini halaman kontak');
});


app.get('/sertifikat', (req, res) => {
    res.sendFile('./sertifikat.html', {
        root: __dirname
    })
})

app.get('/produk/:id_nya', (req, res) => {
    res.send('ID Produk: ' + req.params.id_nya);
})

app.use('/', (req, res) => {
    //res.statusCode = 404;
    //res.send('ini halaman semua bisa ngakses apapun pathnya | 404 boskuh');
    // res.json({
    //     nama: 'ilham',
    //     nim: '202410103034'
    // });

    res.sendFile("./about.html", {
        root: __dirname
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
























// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//     });
//     let url = req.url;
//     console.log(req);
//     switch (url) {
//         case '/about':
//             res.write('<h1>ini adalah halaman about</h1>');

//             break;
//         case '/home':
//             res.write('<h1>ini adalah halaman home</h1>');
//             break;


//             // route default-nya
//         default:
//             // res.write('<h1>ini adalah halaman default</h1>');
//             fs.readFile('./index.html', (e, penampung) => { //ini kayak file handling
//                 if (e) {
//                     res.writeHead(404);
//                     res.write('error boskuh');
//                 } else {
//                     res.write(penampung); //nampilin ke web
//                 }

//                 res.end();
//             });
//             break;

//     }


//     // res.write('<h1>heloo</h1>');
//     // res.end();
// });

// server.listen(port, () => {
//     console.log(`server berjalan di port ${port}`);
// });