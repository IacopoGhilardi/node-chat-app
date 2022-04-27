const express = require('express')
const app = express()
const port = 5000
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");


const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});


// app.get('/', (req, res) => {
// res.sendFile(path.resolve('../web-app/index.html'));
// })

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log('user disconnected');
    })

    socket.on('chat message', (msg) => {
        console.log(`message: ${msg}`);
        socket.broadcast.emit('receive_message', msg);
        // io.emit('chat message', msg);
    });
});

server.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
  