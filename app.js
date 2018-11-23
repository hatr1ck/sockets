const express = require('express');
const app = express();
const socket = require('socket.io');
const server = app.listen(4000, ()=>{
	console.log('listening')
})

app.use(express.static('public'));





const io = socket(server);


io.on('connection', (socket)=>{
	console.log('connection', socket.id);
	socket.on('chat', (data)=>{
		io.sockets.emit('chat', data)
	})
	socket.on('typing', (data)=>{
		socket.broadcast.emit('typing', data)
	})
})
