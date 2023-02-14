const express = require("express");

const app = express();

const PORT = process.env.PORT || 4002;

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/all", (req, res) => {
  res.send("Hola mundo ALL, todos los usuarios");
});

app.get("/all-2", (req, res) => {
    res.send("ULTIMO CAMBIO !!!");
  });
  

app.listen(PORT, () => {
  console.log("Server ok!");
});
