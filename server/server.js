const express = require('express')
const app = express()
const port = 3000
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


var path = require('path');

app.get('/', (req, res) => {
res.sendFile(path.resolve('../web-app/index.html'));
})

io.on('connection', (socket) => {
console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    })

    socket.on('chat message', (msg) => {
        console.log(`message: ${msg}`);
    });
});

server.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
  