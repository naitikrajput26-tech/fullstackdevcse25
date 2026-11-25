const http = require('http');

// Create HTTP Server
const server = http.createServer((req, res) => {

    // Set Status Code
    res.statusCode = 200;

    // Set Response Headers
    res.setHeader('Content-Type', 'text/plain');

    // Send Response
    res.end('Hello World');

});

// Start Server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});