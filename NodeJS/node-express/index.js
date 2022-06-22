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


//main program

//--dish--
const dishRouter = require('./routes/dishRouter');
app.use('/dishes', dishRouter);

//--promotion--
const promoRouter = require('./routes/promoRouter');
app.use('/promotions', promoRouter);

//--leader--
const leaderRouter = require('./routes/leaderRouter');
app.use('/leaders', leaderRouter);

//akhir main program

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