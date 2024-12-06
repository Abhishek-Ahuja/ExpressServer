
const express = require("express");
const {firstMiddleware, secondMiddleware, thirdMiddleware} = require("./middleware")
const server = express();
// There are middlewares directly added without mentioning 
// in main req and must run in order in which they are written
// server.get("/", (req, res, next) => {
//     console.log("First Middleware is callled.");
//     next();
// })


// server.get("/", (req, res, next) => {
//     console.log("Second Middleware is callled.");
//     next();
// })

server.get("/", firstMiddleware, secondMiddleware, thirdMiddleware, (req, res) => {
    res.send("Express server")
})

server.listen(8080, () => {
    console.log("Started on Port num 8080.")
})