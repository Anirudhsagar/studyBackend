
// express = =  Express is a node js web application framework that provides broad features for building web and mobile applications. 
//  = Express was created to make APIs and web applications with ease,

const express = require('express');

require("dotenv").config();

const app = express();

// const port = 4000;


// callBack Function == Any function that is passed as an argument to another function so that can be executed in that othjer function is called as a callback function.
//  = A callback function can run after another function has finished


// A JavaScript function does not perform any checking on parameter values (arguments).
// function functionName(parameter1, parameter2, parameter3) {
//   // code to be executed
// }

app.get('/', (req, res) => {
    res.send("hello world!")
})


app.get("/anirudh", (req, res) => {
  res.send("<h2>hello world</h2>");
});


// The GET HTTP method is used to read data or retrieve information about a resource. In case of success, the GET HTTP method returns the 200 OK response code. In the response body, the method returns a representation of a resource



// app.listen(port, () => {
// console.log(`example app listening on ${port}`);
// })


// dotenv

app.listen(process.env.PORT, () => {
    console.log("listening on|" + process.env.PORT)
})



//  http://localhost:4000/