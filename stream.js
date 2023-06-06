// use case :- sending a large file to client

const fs = require('fs');
const server = require('http').createServer();
// server.on('request', (req, res) => {
    // fs.readFile('text.txt',(err,data)=> {
    //     if (err) console.log(err);
    //     res.end(data);
    // })
//     const readable = fs.createReadStream('tet.txt');
//     readable.on('data', chunk => {
//         res.write(chunk); // response is writable stream
//     })
//     readable.on('end', () => {
//         res.end();
//     })
//     readable.on('error', err => {
//         console.log(err);
//         res.statusCode=500;
//         res.end('file not found');
//     })
// })
    
server.on('request', (req, res) => {
    const readable = fs.createReadStream('text.txt');
    readable.pipe(res); // readableSource.pipe(writableDestination)
})
    server.listen(8000, '127.0.0.1', () => {
        console.log("listening...");
    });