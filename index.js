/** @format */

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`hello kya haal h jee <br> 
        <a href="/home">home</a>`);
});

app.get("/home", (req, res) => {
  res.send(`This is the home page`);
});


app.listen(5000, () => console.log("server is running "));
