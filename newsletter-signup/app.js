//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile("");
});

app.listen(3000,function(){
    console.log("server is up running on port 3000");
});