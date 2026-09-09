import http from "http";

const server = http.createServer((req, res) => {

    // Status code + Headers
    res.writeHead(200, {
        "content-type": "text/html"
    });

    // Response
    res.write("<h1>This is my own server</h1>");
    res.write("Hello World");

    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});