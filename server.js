// require('dotenv').load();
const express = require('express');
const low = require('lowdb');
const path = require('path');
const storage = require('lowdb/adapters/FileSync');
const uuid = require('node-uuid');

const bodyParser = require('body-parser');
const logger = require('winston');
const morgan = require('morgan');


var app = express();
var fs = require('fs');

console.log(path.join(__dirname, 'src/data/db.json'));
const adapter = new storage(path.join(__dirname, 'src/data/db.json'));
const db = low(adapter);

app.set('host', 'localhost');
app.set('port', 3000);

app.use(morgan('dev'));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Accept, Content-Type, Origin, X-Requested-With');
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
        //console.log(data);
        
        res.json(obj);
    });
    
})

app.post('/api/tasks', (req, res) => {
    
  console.log(req.body);
  let data = req.body;
    
    

    data.id = uuid.v4();
    let task = db.get('tasks').push(data).last().value();
    res.status(200).json(task);
  });
  
  app.get('/api/tasks', (req, res) => {
    res.status(200).json(db.get('tasks').value());
  });
  
  app.get('/api/tasks/:id', (req, res) => {
    res.status(200);
  });
  
  app.put('/api/tasks/:id', (req, res) => {
    let id = req.params.id;
    let task = db.get('tasks').find({id}).assign(req.body).value();
    res.status(200).json(task);
  });
  
  app.delete('/api/tasks/:id', (req, res) => {
    let id = req.params.id;
    let task = db.get('tasks').find({id}).value();
    db.get('tasks').remove({id}).value();
    res.status(200).json(task);
  });

app.listen(app.get('port'), app.get('host'), error => {
  if (error) {
    logger.error(error);
  }
  else {
    logger.info(`Server listening @ ${app.get('host')}:${app.get('port')}`);
  }
})