
const express = require("express");

const server = express();

server.get("/", (req, res, next) => {
    console.log("First Middleware is callled.");
    next();
})


server.get("/", (req, res, next) => {
    console.log("Second Middleware is callled.");
    next();
})

server.get("/", (req, res) => {
    res.send("Express server")
})

server.listen(8080, () => {
    console.log("Started on Port num 8080.")
})