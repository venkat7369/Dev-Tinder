const express = require("express");


const app = express();

const {adminAuth, userAuth} = require("./middlewares/auth");


app.use("/", (err, req, res, next) => {
    if(err) {
        res.status(500).send("something went wrong");
    }
});

app.get("/getUserData", (req, res) => {


    throw new Error("kjgsds");
    res.send("User Data sent");
});

app.use("/", (err, req, res, next) => {
    if(err) {
         res.status(500).send("something went wrong")
    }
});


app.listen(3000, () => {
    console.log("Server is succesfully listening on port 3000....");
});         