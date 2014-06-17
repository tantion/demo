
var fs = require('fs');

fs.readFile('./hello.js', function (err, file) {
    console.log(err);
});

fs.readFile('./hello2.js', function (err, file) {
    console.log(err);
});
