const express = requre("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello Express");
});

app.listen(3000);