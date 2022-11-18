console.log("Hello word!");

var fs = require('fs');
// fs.writeFileSync('E:/hello.txt', 'Hello world!');
fs.writeFileSync(__dirname + '/hello.txt', 'Hello world!');

