// require can fetch module 
const http = require('http');

// create server
// requestListner is excute for every incomming request
// first is requset obj second is respone obj
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

//keep ruunig to listen
server.listen(3000);