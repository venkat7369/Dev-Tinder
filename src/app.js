const express = require("express");


const app = express();

const {adminAuth, userAuth} = require("./middlewares/auth");


app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
    res.send("User logged in successfully!");
});

app.get("/user", userAuth, (req, res) => {
    res.send("user data sent");
});

app.get("/admin/getAllData", (req, res) => {
    res.send("all data sent");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a User")
});

app.listen(3000, () => {
    console.log("Server is succesfully listening on port 3000....");
});         