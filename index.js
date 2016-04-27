var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db = require('./config/db');
var post = require('./controllers/post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', post.index); //list page

app.listen(8080, function(){
    console.log("Listening on port 8080...");
});
