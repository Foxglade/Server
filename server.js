const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

 socket.on('chat message', (msg) => {
   console.log('Received message:', msg);
   io.emit('chat message', { sender: msg.sender, message: msg.message });
 });


});

const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log('listening on *:' + port);
});
