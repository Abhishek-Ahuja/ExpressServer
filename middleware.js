function firstMiddleware(req, res, next) {
    console.log("First Middleware is callled.");
    next();
}


function secondMiddleware(req, res, next) {
    console.log("Second Middleware is callled.");
    next();
}

function thirdMiddleware(req, res, next) {
    console.log("Third Middleware is callled.");
    next();
}

module.exports = {
    firstMiddleware, secondMiddleware, thirdMiddleware
}