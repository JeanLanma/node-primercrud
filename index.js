require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3300;
const cors = require('cors');

const body_parser = require('body-parser');

app.use(cors());
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

const dbconnection = require('./database/dbConnection');

//Crud

//C - Create
app.post('/contents', (req,res,next) => {
    dbconnection.content_create(req,res,next);
});

//R - Read
app.get('/contents', (req,res,next) => {
    dbconnection.content_getAll(req,res,next);
});

app.get('/', function(req,res) {
    res.send({"Message": "Bienvenido"});
})

app.listen(port,() => {
    console.log(`App Runing in http://localhost:${port}`)
})