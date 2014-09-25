var express = require('express');
var bodyParser = require('body-parser');
var dustjs = require('adaro');
var path = require ('path');

var app = express();
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/static'));

var viewPath = path.join(__dirname,'/templates'); 
app.engine('dust', dustjs.dust({ layout: "masterpage"}));
app.set('view engine', 'dust');
app.set('views', viewPath);



app.get('/', function(req, res){
  	res.json({ Message: "Hello world!"});
});

app.get('/dust', function(req, res){
  	res.render('index')
});


app.listen(3000);