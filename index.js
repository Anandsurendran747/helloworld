const express = require('express')
var hbs=require('express-handlebars')
var path = require('path');
const app =express();


app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'hbs');
app.use(express.json());
app. engine( 'hbs', hbs.engine( { extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/view/layout/', partialsDir: __dirname + '/view/partials/' } ) );

app.get('/',(req,res)=>{
    var url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('index',{url:url})
})

app.get('/about',(req,res)=>{
    var url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('about',{url:url})
})

app.get('/contact',(req,res)=>{
    var url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('contact',{url:url})
})

app.get('/blog',(req,res)=>{
    var url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('blog',{url:url})
})




app.listen(3000,()=>{
    console.log("server started...");
})