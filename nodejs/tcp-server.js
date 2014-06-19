var net = require('net');

var server = net.createServer();

server.on('connection', function (socket) {

    socket.write('wellcome');

    socket.on('data', function () {
        socket.write('hello you');
    });

    socket.on('end', function () {
        console.log('tcp server abort');
    });
});

server.listen(8124, function () {
    console.log('server bound');
});
