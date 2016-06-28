var PORT = process.env.PORT || 3000
var moment = require("moment")
var now = moment();
var express = require('express')
var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'))


io.on('connection', function(socket) {
    console.log('User connceted via socket.io');

    socket.on('msg', function(msg) {
        // body...
        console.log('msg : ' + msg.text + " at time " + msg.time + " in room : " + msg.room)
        socket.broadcast.emit(msg.room, msg)
    })

    socket.emit('msg', { // not being sent for the moment
        text: 'hello to the chat app'
    })

})



http.listen(PORT, function() {
    // body...
    console.log(" Server is now running on " + PORT);
})