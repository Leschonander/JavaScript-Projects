const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {title: "Express Chat!"})
})

io.on('connection', (socket) => {
    socket.broadcast.emit('User connected')

    socket.on('connection', () => {
        socket.broadcast.emit('User connected')
        io.emit('connection', 'User connected')
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('User disconnected')
        io.emit('disconnect', 'User disconnected')
    })

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        socket.broadcast.emit(msg);
    });

    socket.on('typing', (msg) => {
        console.log(`${msg}`)
    })
});
  

http.listen(3000, () => {
    console.log("Listening on *:3000")
})