try {
  var fs = require("fs");
  var express = require("express");
  var files = fs.readdirSync("/spec/");
  var path = require("path");
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

    // start.forEach((element) => {
    //   newPath = fs.readdirSync("/spec/" + element + "/");
    //   getAllPDFPaths(newPath);
    //   pathList.push(element);
    // });
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
    res.sendFile();
  });
  app.listen(port, () => console.log(port));
} catch (err) {
  console.log(err);
}
