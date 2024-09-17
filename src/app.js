const express = require("express");

const app = express();

app.use("/", (req, res) => {
    res.send("Hello from the dashboard Venkat");
});

app.use("/hello", (req, res) => {
    res.send("hello from the hello");
});



app.use("/test", (req, res) => {
    res.send("Hello from the server!");
});

app.listen(3000, () => {
    console.log("Server is succesfully listening on port 3000....");
});