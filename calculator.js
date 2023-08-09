const express=require("express");
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/BMIcalculator.html");
    });

app.post("/",function(req,res){
let sum=Number(req.body.n1)+Number(req.body.n2);
res.send("Your result is"+ sum);
});

app.post("/bmicalculator",function(req,res){
    var Weight=parseFloat(req.body.Weight);
    var Height=parseFloat(req.body.Height);
    var BMI=Weight/(Height*Height)
    res.send("Your BMI is"+ BMI);
    });

app.listen(3000,function(){
console.log("Server started");
});