try {
  var fs = require("fs");
  var express = require("express");
  var opn = require("opn");
  var newPath;
  var pdfPathList = [];

  const getAllPDFPaths = (start, end) => {
    let currentPath;
    if (end) {
      currentPath = start + end + "/";
    } else {
      currentPath = start;
    }
    newPath = fs.readdirSync(currentPath);
    newPath.forEach((r) => {
      if (!r.includes(".")) {
        getAllPDFPaths(currentPath, r);
      } else {
        pdfPathList.push(currentPath.substring(5) + r);
      }
    });
  };
  getAllPDFPaths("/spec/", "");

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
    res.sendFile("index.html");
  });
  app.get("/list/", function (req, res) {
    res.json(pdfPathList);
  });
  app.listen(port, () => {});
  opn("index.html");
} catch (err) {
  console.log(err);
}
