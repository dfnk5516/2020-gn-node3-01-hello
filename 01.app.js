const express = require('express');
const app = express();

app.get('/', function(req, res, next)
{
    res.send('<h1>hello world</h1>');
})
app.get('/hello', function(req, res, next)
{
    let name = req.query.name;
    console.log(name);
    res.send('<h1>' + name + '</h1>');
})
app.listen(3000, ()=>{ console.log('server started...')});