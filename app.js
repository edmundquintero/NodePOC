const express = require('express');
const app = express();

const router = require('./server/core/router/router');

app.use(router);

app.get('/', function (req, res) {
    res.status(200).send('hello world');
  })
  
app.listen(3000);