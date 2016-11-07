var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/views'));
app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
	res.render('index.ejs',{title:"Forms"});
});

app.post('/result/submit', function(req,res){
	//code to get information from form
	console.log('POST DATA \n\n', req.body);
	res.render('results',{info:req.body});
});

//this line should always be the last on the file
app.listen(8000, function(){console.log("Listening on port 8000");});