require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

app.get("/api/hello", function(request, response) {
    response.json({ message: "api is working" });
});

app.use("*", function(request, response) {
    response.send(`<h1>Hello there!</h1>`);
})

app.use(function(error, request, response, next) {
    response.status(500).json({ 
        message: error.message, 
        stack: error.stack 
    });
});

app.listen(PORT, function() {
    console.log(`*** app running on: ${PORT} ***`);
})