let express = require("express");
let app = express();

const absolutepath = __dirname + "/views/index.html";

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(absolutepath);
});


app.get("/json", (req, res) => {
  res.json({ message: ` Edmiro has ${23} years old` });
});


module.exports = app;
