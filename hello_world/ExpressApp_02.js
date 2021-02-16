const express = require('express');
const app = express();


app.use('/hello', function(req, res, next) {
    console.log('A new request was received at ' + Date.now());
    next();
});

app.get('/hello', function(req, res){
    res.send('GET route on hello from ExpressApp_02');
});


app.listen(3000);