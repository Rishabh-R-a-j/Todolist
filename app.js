const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const date=require(__dirname+ "/date.js");
app.set('view-engine','ejs');
var items=[];
var workitem=[];
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    let Day=date.getDate();
res.render("list.ejs",{listTitle: Day ,newlistitem :items});
});
app.post("/",function(req,res){
    var item=req.body.item;
    if(req.body.list==="Work"){
workitem.push(item);
res.redirect("/work");
    }
    else{
   items.push(item);
   res.redirect("/");}
});
app.get("/work",function(req,res){
res.render("list.ejs",{listTitle :"Work list",newlistitem :workitem});
});
app.listen(3000,function(){
    console.log("Server is running at port 3000");
});