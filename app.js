var fs = require("fs");
var express = require("express");
var files = fs.readdirSync("/Code/Extract-Image-PDF");

var app = express();
const port = 5501;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", function (req, res) {
  res.json(files);
});
app.listen(port, () => console.log(port));

// const server = http.createServer((req, res, next) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.end();
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}`);
// });
