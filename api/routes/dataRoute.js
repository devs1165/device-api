const express = require('express');
const router = express.Router();
const Data = require('../models/dataModel')


// getting all the data from db
router.get('/',(req,res,next) => {
    Data.find()
    .select('_id data timestamp')
    .then(result => {
        res.status(200).json({
            message:"all data fetched from db",
            data:result
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error:err
        });
    });
})


// create data or add new data to db 
router.post('/',(req,res,next) => {
    // format data
    const data = new Data({
        data: req.body.data,
        timestamp:Date.now()
    })
    // save data
    data.save()
    .then(result =>{
        res.status(201).json({
            message:'data stored succesfully on db',
            data:result
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error:err
        });
    });
})

module.exports = router;
