let express = require("express");
let app = express();

const absolutepath = __dirname + "/views/index.html";

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(absolutepath);
});

module.exports = app;
