const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Data = require('./api/models/dataModel')
// const request = require('request');
const dataRouter = require('./api/routes/dataRoute');

// m-lab mongo connection
mongoose.connect('mongodb://ambeedev:ambeedev1@ds151293.mlab.com:51293/heroku_gvsq2gkn',{ useNewUrlParser : true });

// mongodb://ambeedev:ambeedev1@ds151293.mlab.com:51293/heroku_gvsq2gkn
// localhost mongo connection
// mongoose.connect('mongodb://127.0.0.1:27017/data-test',{ useNewUrlParser: true } )

// use bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// cors handling
app.use((req, res, next) => {
    // * can be replaced by any http://somthing.com
    res.header('Access-Control-Allow-Origin','*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );  
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE')    
        return res.status(200).json({});
    }
    next();
});


// welcome api on '/' route
app.get('/',(req,res,next) => {
    res.status(200).json({
        message:".....server is running",
        credit:"powered by -Ambee"
    })
})


app.use('/api/v1/data', dataRouter);


module.exports = app;
