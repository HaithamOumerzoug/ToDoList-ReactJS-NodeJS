const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser')
require('dotenv').config();
const app=express()
const routefile = require('./routes/web')

//Connection db
mongoose.connect(
    process.env.DATABASE,{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify: false
})
.then(console.log("Connection DATABASE OK ..."))
.catch((err)=>console.log("Connection Feiled !"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); 
app.use('/',routefile);


const port =process.env.PORT;
app.listen(port,()=>console.log(`Connection to Port : ${port} ...`))