const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res) {
    res.sendFile(__dirname+"/index.html");
    
});

app.post("/",function(req,res){
    var num1 = req.boby.num1;
    var num2 = req.body.num2;
    var BMI =  num1/(num2*num2);
    res.send("your BMI is "+BMI);
});
app.listen(3000);