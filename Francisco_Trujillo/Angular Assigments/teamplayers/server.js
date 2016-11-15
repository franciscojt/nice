var express = require('express'),
//	mongoose = require('mongoose'),
//	bp = require('body-parser'),
//	path = require('path');
app = express();
path =  require('path');

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.listen(5000, function(){});