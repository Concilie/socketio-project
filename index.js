const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname }`+ '/public/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        socket.emit('chat message', msg)
    })
    console.log("Un utilisateur sest connecté")
})


server.listen(8014, () => console.log(`Server start at port 8014`))