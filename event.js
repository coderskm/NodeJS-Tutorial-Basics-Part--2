const EventEmitter = require('events');
const http = require('http');
//const myEmitter = new EventEmitter(); // returns named events.
class Sales extends EventEmitter{
    constructor() {
        super();
    }
}

const myEmitter = new Sales();
myEmitter.on('newSale', () => {
    console.log("There was sale!") // when "newSale" event will occur then this callback will be executed.
})

myEmitter.on("newSale", () => {
  console.log("Customer name : jonas"); // we can make multiple listeners for same event.
});

myEmitter.on('newSale', stock => {
    console.log(`there are ${stock} items`)
})

myEmitter.emit('newSale',9); //event named as "newSale"

///////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const server = http.createServer();
server.on('request', (req,res) => {
    console.log("request received!");
    console.log(req.url);
    res.end('request received');
})

server.on("request", (req, res) => {
  console.log(" another request 😊");
});

server.on("close", () => {
    console.log("server closed");
});

// server.listen() used for starting the server
server.listen(8000, '127.0.0.1', () => {
    console.log("waiting for requests...");
});

// on terminal same thing printed twice because request happening two times once for root(/) and other time for favicon.ico (/favicon.ico)