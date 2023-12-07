const express = require("express");
const app = express();


app.set("view engine", "ejs")

app.get("/", function (req, res) {
  res.send("hello Express");
});

app.get("/contact", function (req, res) {
  res.send("this is a contact page");
});

app.get("/profile", function (req, res) {
  res.render("profile");
});

app.get("/profile/:username", function (req, res) {
  res.send(`this is your username: ${req.params.username}`);
});
app.listen(3000);
