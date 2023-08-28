const express = require('express');

const path = require('path');

const hbs = require('hbs');

const app = express();

const port = 8001;

const templatePath = path.join(__dirname,'/templates/views')
const staticPath = path.join(__dirname,'public')
const partialPath = path.join(__dirname,'/templates/partials')

app.set('view engine','hbs')
app.set('views',templatePath);
app.use(express.static(staticPath))
hbs.registerPartials(partialPath);

app.get('/index',(req,res) => {
    res.render('index',{
        name: 'Arunava'
    })
})

app.get('/', (req,res) => {
    res.send("I am in home page");
})

app.get('/about', (req,res) => {
    res.json(
        [
            {
                id: 1,
                topic: "Hi"
            },
            {
                id: 1,
                topic: "Sending JSON"
            }
        ]
    );
})

app.get('/about/*',(req,res) => {
    res.render('404',{
        errorMsg: "Oops page couldn't be found from about page!!"
    })
})

app.get('*',(req,res) => {
    res.render('404',{
        errorMsg: "Oops page couldn't be found!!"
    })
})



app.listen(port, ()=>{
    console.log(`started successfully on port ${port}`);
})