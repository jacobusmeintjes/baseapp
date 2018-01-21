// require('dotenv').load();

var express = require(`express`);
var app = express();
var fs = require('fs');


// Add headers
app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Origin");

    // Website you wish to allow to connect
    //res.header('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    //res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    //res.setHeader("Access-Control-Allow-Headers","Content-Type, Access-Control-Allow-Origin");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/api', function(req, res){   
    res.json({message: `Welcome to the Server`});
    console.log(`Call made to the node js api`);
})

app.get('/api/menu', function(req, res, next){
    var obj;
    console.log(`Call made to load menu`);
    
    fs.readFile('./src/data/menu.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        console.log(data);
        
        res.json(obj);
    });
    
})



app.listen(3000, ()=>{
    console.log(`API listening on port 3000`);
})