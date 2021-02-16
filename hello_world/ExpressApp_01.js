const express = require('express');
const app = express(); 
const hello = require('./hello.js');
const PORT = process.env.PORT || 3000;

//Routes
app.get('/hello', function(req, res) {
    res.send(hello);
});

app.get('/example', function(req, res) {
    res.send("Hello from the example route");
});

//sub routes
app.get('/example/b', function(req, res) {
    res.send("Hello from the example sub route B!");
});

app.get('/example/c', function(req, res) {
    res.send("Hello from the example sub route C!");
});

//Middleware functions
const callbackOne = function(req, res, next) {
    console.log('callbackOne');
    next();
}

const callbackTwo = function(req, res, next) {
    console.log('callbackTwo');
    next();
}

const callbackThree = function(req, res, next) {
    console.log('callbackThree says hello from route C!');
    res.send('callbacks triggered');
}

//Route example with Next
app.get('/example/d', function(req, res, next) {
    console.log('the response will be sent by the next function...');
    next();
},
function(req, res) {
    res.send('Hello from D!');
})

//Route example with 3 middleware functions
app.get('/example/c/withmiddleware', [callbackOne, callbackTwo, callbackThree]);

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});
