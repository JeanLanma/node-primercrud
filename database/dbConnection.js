const mongoose = require('mongoose');

const MongoDBConection = require('../config/index');

const mongoDB1 = process.env.MONGODB_URI || MongoDBConection;

mongoose.connect(mongoDB1,{useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: false});

mongoose.Promise = global.Promise;


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose Conection Error: '));


const Contents = require('./Contents');

exports.content_create = function(req,res){
    let content = new Contents({
        contentType: req.body.contentType,
        contentBody: req.body.contentBody,
        contentId: req.body.contentId
    })
    content.save(function(err){
        if(err) return console.log(err);
        res.send({"message": 'OK'})
    })
}

exports.content_getAll = function(req,res){
    Contents.find({}, function(err,response){
        if(err) return console.log(err);
        res.send(response);
    })
}