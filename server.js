const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, world!</h1>");
});

app.get("/about", function(req, res) {
    res.send("My Name is Ralph De Jesus");
})

app.get("/mother", function(req, res) {
    res.send("My mother's name is Stephanie De Jesus. <h1>Gwapa siya</h1>")
});

app.get("/girlfriend", function(req, res) {
    res.send("My girlfriend is Leslie Miraflor, She is the ~BESTEST~ girlfriend ever.")
})

app.listen(3000, function () {
    console.log("Server running at http://localhost:3000");
});