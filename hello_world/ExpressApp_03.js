const express = require('express');
const app = express();
const hello = require('./routes_02.js');

app.use('/hello', hello);

app.get('/hello', function(req, res) {
    res.send('Get route on hello');
});

app.listen(3000);