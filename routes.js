const fs = require('fs'); 

const requestHandler = (req, res) => { 
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type = "text" name = "message"><button type ="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        //buffer to use chunk data befor parsing
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk); // <Buffer 6d 65 73 73 61 67 65 3d 73 61 64 66>
            // const only ban ' = ' , so can use push
            body.push(chunk); 
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody); // message=sadf
            const message = parseBody.split('=')[1];
            // fs.writeFileSync('message.txt', message); //block execution of next line code until this file is done
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

// module.exports = {
//     handler: requestHandler,
//     someText: "some text",
// }; // global obj

exports.handler = requestHandler;
exports.someText = "some text";