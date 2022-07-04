const express = require('express');
const expressLayouts = require('express-ejs-layouts'); //ini biar bisa layout jadi satu template main-layouts
const morgan = require('morgan');
const app = express();
const port = 3000;


app.set('view engine', 'ejs' );

//third-party middleware
app.use(expressLayouts);
app.use(morgan('dev')); //=> mencetak log di terminal misal (Get /tentang 200 25ms)

//application level middleware => harus ngelewatin ini dulu baru route setelahnya bisa diakses
app.use((req,res,next)=> {
    console.log('Time:', Date.now());
    next();
})

//built-middleware => buat asset jadi bisa diakses
app.use(express.static('public'));


const mahasiswa = [
    {
        nama: 'ilhamadi',
        prodi:'if',
    },
    {
        nama: 'budi',
        prodi:'ti',
    },
    {
        nama: 'hamba tuhan',
        prodi:'si',
    }
]
app.get('/', (req, res) => {
    //karena pake ejs tinggal panggil nama file didalam views
    res.render('index',{
        judul:'halaman home',
        mahasiswa:mahasiswa,
        layout:'layouts/main-layouts'
    });
    
});

app.get('/tentang', (req, res) => {
    res.render('about',{judul:'halaman about',layout:'layouts/main-layouts'});
});

app.get('/kontak', (req, res) => {
    res.render('contacts',{judul:'halaman contacts',layout:'layouts/main-layouts'});
});


app.get('/produk/:id_nya', (req, res) => {
    res.send('ID Produk: ' + req.params.id_nya);
})

app.use('/', (req, res) => {
    //res.render('index');
    res.send(`ga ada yang cocok boskuh link yang boskuh masukin: ${req.url}`);
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