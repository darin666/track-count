const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const append = require('./src/append');
const errorHandler = require('./src/errorHandler');
const redis = require('./src/redis');

const port = process.env.port || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/count', async (req, res) => {
    const count = await redis.redisGet('count');
    res.status(200).send(count);
});

app.post('/track', async (req, res, next) => {
    try {
        if (_.isEmpty(req.body)) throw new Error('Received an empty object.');
        const hasCountProperty = req.body.hasOwnProperty('count');
        const count = req.body.count;

        if(hasCountProperty) await redis.redisIncrby('count', count);

        append.appendData(req.body, 'data.txt');
        res.sendStatus(200);
    } catch (error) {
        next(error);
    };
});

app.use(errorHandler.errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});