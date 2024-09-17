const express = require("express");

const app = express();



app.get("/user", (req, res) => {
    res.send({firstName: "venkat", lastName: "Gutta"})
})

app.use("/test", (req, res) => {
    res.send("Hello from the server!");
});

app.listen(3000, () => {
    console.log("Server is succesfully listening on port 3000....");
});         