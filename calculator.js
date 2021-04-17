const express=require("express");
const app= express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res)
{
var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var result=num1+num2;
  res.send("Your final result is="+ result);
});

app.get("/harshal",function(req,res)
{
res.sendFile(__dirname+"/harshal.html");
});

app.post("/harshal",function(req,res)
{
  var height=parseFloat(req.body.height);
  var weight=parseFloat(req.body.weight);
  var bmi= weight/(height*height);
  res.send("your bmi is"+ bmi);
});

app.listen(3000,function(){
  console.log("server 3000 is started");
});
