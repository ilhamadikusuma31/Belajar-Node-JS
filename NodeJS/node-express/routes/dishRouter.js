const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

// ini untuk route /dishes
dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the dishes to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all dishes');
    });



//================================================== ini yang pake id



// ini untuk route /dishes/:dishesId
dishRouter.route('/:dishId')
    .get((req, res, next) => {
        res.end('siap mengirimkan hidangan ini ' + req.params.dishId);
    })


    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('post operation tidak support pada /dishes/' + req.params.dishId);
    })

    .put((req, res, next) => {
        res.write('akan mengupdate hidangan' + req.params.dishId + '\n');
        res.end('akan update hidangan: ' + req.body.name + ' dengan detail: ' + req.body.description)
    })

    .delete((req, res, next) => {
        res.end('menghilangkan hidangan: ' + req.params.dishId);
    });


module.exports = dishRouter;