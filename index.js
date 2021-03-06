var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var data;
// var db = require('./config/db');
// var post = require('./controllers/post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
   res.render('index', data);
 }); //intro

  app.get('/examples', function(req,res){
     res.render('graphic/examples', data);
   }); //examples

app.get('/connected', function(req,res){
   res.render('graphic/connected', data);
 }); //well connected

app.get('/global', function(req,res){
   res.render('graphic/global', data);
 }); //global market

app.listen(8080, function(){
    console.log("Listening on port 8080...");
});
