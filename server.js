// require('dotenv').load();

var express = require(`express`);
var app = express();

app.get('/api', function(req, res){
    res.json({message: `Welcome to the Server`});
    console.log(`Call made to the node js api`);
})

app.listen(3000, ()=>{
    console.log(`API listening on port 3000`);
})