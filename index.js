
const express = require("express");

const server = express();

server.get("/", (req, res, next) => {
    console.log("Middleware is callled.");
    next();
}, (req, res) => {
    res.send("Express server")
})

server.listen(8080, () => {
    console.log("Started on Port num 8080.")
})