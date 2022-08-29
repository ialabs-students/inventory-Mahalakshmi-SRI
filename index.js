const express = require("express");

console.log("Hello, I am a test server");

const server = express();


server.get("/hello/:name", (req, res) => {
    res.send("Hi there, glad to meet you!");
});
//PATH PARAM 
server.get("/hello/:name", (req, res) => {
    res.send("Hi there, glad to meet you " + req.params.name);
});

//QUERY PARAM
server.get("/hi", (req, res) => {
    res.send("Hello there, glad to meet you " + req.query.name);
});
server.put("/update/user", (req, res) => {
    // console.log(req.body);
    users.push(req.body);
    res.send("user register succesfully")
});
server.delete("/delete/user", (req, res) => {
    // console.log(req.body);
    users.pop(req.body);
    res.send(users)
});
server.get("/fetch/user", (req, res) => {

    res.send(users)
});
server.get("/fetch/user/:id", (req, res) => {
    var id = req.params.id;
    users.forEach(u => {
        if (u.id == id) {
            res.send(u);
        }
})
res.send({});
});


//   http://localhost:4000/hello

server.listen(4000, () => {
    console.log("Server Running On Port: 4000");
});

//REQUEST/QUERY PARAM -- <URL?key=value&key1=value1&key2=value2>
//   http://localhost:4000/hello?key=value&key1=value1&key2=value2
//   http://localhost:4000/hello?name=JN

//PATH PARAM -- <URL/extra/path>
//   http://localhost:4000/hello/JN