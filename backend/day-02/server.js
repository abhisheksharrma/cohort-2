const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.send("Hello world");
})

app.get("/about", (req, res) => {
    res.send("This is about page.");
})

app.get("/home", (req, res) => {
    res.send("This is Home page.");
})

app.get("/contact", (req, res) => {
    res.send("This is Contact page.");
})

app.listen(3000);