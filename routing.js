const http = require('http');
//const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if(pathName==='/') res.end("on home")
    if (pathName === '/overview') res.end("I am on overview")
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header':'hello-world'
        });
        res.end("<h1>page no found</h1>");
    };
})

server.listen(8000, '127.0.0.1', () => {
    console.log("listening to request on 8000");
}) 