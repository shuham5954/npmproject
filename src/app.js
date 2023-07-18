const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const static_path = path.join(__dirname,"../public");



app.use(express.static(static_path));

app.get("/",(req,res)=>{
res.send("this is home page ");

});
app.get("/about",(req,res)=>{
res.send("this is portfolio of shubham ");

});
app.get("/weather",(req,res)=>{
res.send("this is weather page ");

});
app.get("*",(req,res)=>{
res.send("404 error opps.s.s. ");

});

app.listen(port,()=>{
    console.log("listning to port number 8000 . . .");
});