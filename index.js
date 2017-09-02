var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  // We fetch the username when the user connect.
  var userName;
  socket.on('on connect', (name) => {
  	userName = name;
  	console.log(name);
  });
  socket.on('chat message', function(msg){
    // we broadcast the message the user wants to send to other user
    socket.broadcast.emit('chat message', msg);
  });
  // we broadcast to all other users still connected once the user disconnects.
  socket.on('disconnect', function(){
    io.emit('chat message', userName + ': user disconnected');
  });	
});

// The port the user connects to.
http.listen(port, function(){
  console.log('listening on *:' + port);
});
