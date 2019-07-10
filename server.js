"use strict";

const express = require("express");
const home = require("./Routes/Home.js");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send(home.play());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
