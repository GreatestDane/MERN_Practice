const express = require('express');
const app = express(); 

app.get('/hello', function(req, res) {
    res.send('Hello from index.js');
});

app.listen(3000);

/* run command : node ExpressApp_01.js
    Navigate to localhost:3000/hello
*/ 