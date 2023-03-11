var express = require("express");
var app = express();

//respond with "hello world!" when a GET request is made to the homepage
app.get("/", function (req, res) {
  //Get method facilitates you to send only limited amount of data because
  res.send("hello world!");
});

//listen to a particular port
app.listen(3000);
