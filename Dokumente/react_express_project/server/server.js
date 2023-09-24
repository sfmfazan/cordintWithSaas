const express = require("express");
const app = express();
const { person } = require("./data");

app.get("/api", (req, res) => {
  //res.json({sucess:})
  res.json({ person });
  console.log("reading data");
});

app.listen(8001, () => {
  console.log("listening my host");
});
