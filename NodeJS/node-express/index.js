const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());


app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next(); //melanjutkan code bawahnya
});


app.get('/dishes', (req, res, next) => {
    res.end('siap mengirimkan hidangan kamu semuanya');
});


app.post('/dishes', (req, res, next) => {
    res.end('akan menambahkan hidangan: ' + req.body.name +
        ' dengan detail: ' + req.body.description);
});

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('put operation tidak support pada /dishes');
});

app.delete('/dishes', (req, res, next) => {
    res.end('menghilangan hidangan kamu semuanya');
});


//==================================================

app.get('/dishes:dishId', (req, res, next) => {
    res.end('siap mengirimkan hidangan ini ' + req.params.dishId);
});


app.post('/dishes:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation tidak support pada /dishes/' + req.params.dishId);
});

app.put('/dishes:dishId', (req, res, next) => {
    res.write('akan mengupdate hidangan' + req.params.dishId + '\n');
    res.end('akan update hidangan: ' + req.body.name + ' dengan detail: ' + req.body.description)
});

app.delete('/dishes:dishId', (req, res, next) => {
    res.end('menghilangkan hidangan: ' + req.params.dishId);
});





app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>Ini Pake Express. Dimana Express itu adalah framework dari Node.js</h1></body></html>");
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server berjalan di ${hostname}:${port}`);
})