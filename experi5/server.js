const http = require('http');

const server = http.createServer((req, res) => {

    // GET Request
    if (req.method === 'GET' && req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('GET: Users Retrieved Successfully');
    }

    // POST Request
    else if (req.method === 'POST' && req.url === '/users') {
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end('POST: User Created Successfully');
    }

    // PUT Request
    else if (req.method === 'PUT' && req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('PUT: User Updated Successfully');
    }

    // DELETE Request
    else if (req.method === 'DELETE' && req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('DELETE: User Deleted Successfully');
    }

    // Invalid Route
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: Route Not Found');
    }

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});