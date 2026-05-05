/** @format */

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello kya haal h jee");
});

app.listen(4000, () => console.log("server is running "));
  