const express = require("express");
const app = express();

app.set("view engine", "ejs"); //ejs setup

app.use(express.static("./public")); //static file setup

app.get("/", function (req, res) {
  res.render("home"); //render route using ejs file
});

app.listen(3000);
