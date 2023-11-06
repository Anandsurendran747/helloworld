const express = require('express')
var hbs=require('express-handlebars')
var path = require('path');
const app =express();


app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'hbs');
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000,()=>{
    console.log("server started...");
})