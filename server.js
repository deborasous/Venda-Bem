require("dotenv").config({ path: __dirname + "/./../../.env" });

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Bem vindo ao servidor");
});

app.listen(port, () => {
  console.log("servidor iniciado com sucesso");
});
