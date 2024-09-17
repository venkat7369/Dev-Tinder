const express = require("express");

const app = express();



app.use("/user", (req, res, next) => {
    //Route Handler
    //res.send("route handler 1");
    console.log("Handlling the route user!");
    //res.send("Response!");
    next();
},
(req, res, next) => {
    console.log("Handling the route user 2");
    //res.send("2nd response!");
    next();
},
(req, res, next) => {
    console.log("Handling the route user 3");
    res.send("3nd response!");
    next()
});

app.listen(3000, () => {
    console.log("Server is succesfully listening on port 3000....");
});         