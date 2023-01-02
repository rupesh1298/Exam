var express=require("express");
var app=express();

const express=require("express")
const app=express();

app.get("/",(req,res)=>{
res.send("hello");
}).listen(4000);
