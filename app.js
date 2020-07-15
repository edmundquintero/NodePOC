const express = require('express');
const app = express();

const assets = express.static('./assets');
app.use(assets);

const router = require('./server/core/router/router');
app.use(router);


app.get('/', function (req, res) {
    res.status(200).send('hello world');
  })

const host = '127.0.0.1';
const port = 3000;
app.listen(port,host,() => console.log(`Server listening on ${host}:${port}`) );