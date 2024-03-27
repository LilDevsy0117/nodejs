// require can fetch module 
const http = require('http');

// create server
// requestListner is excute for every incomming request
// first is requset obj second is respone obj

const server = http.createServer((req, res) => {
    console.log(req);
});

//keep ruunig to listen
server.listen(3000);