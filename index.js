import express from 'express';
const app=express();
let port=process.env.PORT || 5500;
app.set("view engine", "ejs");
app.use(express.static("styling"));
app.get("",(req,res)=>{
    res.render("index.ejs")
})
app.get("/home",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/web_tips",(req,res)=>{
    res.render("web_dev_tips.ejs");
})
app.get("/aiml",(req,res)=>{
    res.render("aiml_insights")
})
app.get("/fitness",(req,res)=>{
    res.render("fitness")
})
app.get("/photography",(req,res)=>{
    res.render("photography")
})
app.get("/fake_products",(req,res)=>{
    res.render("fake_products")
})
app.listen(port,()=>{})
