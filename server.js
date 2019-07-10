"use strict";

const express = require("express");
const home = require("./Routes/Home.js");
const request = require("request");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("index", { title: "Playing roulette", message: home.play() });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

request({
  uri: "http://localhost:8080",
  method: "GET"
});
