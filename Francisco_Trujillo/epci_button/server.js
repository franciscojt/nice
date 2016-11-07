var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname,'./static')));
path.join(__dirname, './views')
app.set('view engine','ejs');

app.get('/', function(req, res){
	res.render('index');
});

var server =  app.listen(8000, function(){console.log('Listening on port 8000');});

var count = 0;

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
	console.log('Socket is listening');
	console.log(socket.id);
	
	socket.on('epicButton', function(data){
		console.log(data)
		count++
		console.log(count)
		
		io.emit('buttonClicked', {response: count});
		
	});
	socket.on('buttonReset', function(data){
		count = 0
		
		io.emit('reset', {reset:count})
	})
	
	
	
});