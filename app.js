var fs = require("fs");
var files = fs.readdirSync("/Code/Extract-Image-PDF");

const http = require("http");

const hostname = "127.0.0.1";
const port = 5500;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(files));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/list`);
});
