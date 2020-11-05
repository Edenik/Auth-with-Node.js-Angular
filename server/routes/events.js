require('../data/database');
const express = require('express');
const router = express.Router();
const userModel = require('../models/User');

router.get('/' , (req,res) => {
    res.send('hello events');
})


router.get('/guests' , (req,res) => {
    let events = [
     {
         "id" : "1",
         "name" : "Eden's Party",
         "description" : "End of course",
         "date" : "20/12/2020",
     },
     {
         "id" : "2",
         "name" : "Hanukka",
         "description" : "End of course",
         "date" : "20/12/2020",
     }
    ]
    res.json(events);
 })


 router.get('/special' , (req,res) => {
    let events = [
     {
         "id" : "1",
         "name" : "party",
         "description" : "happy times",
         "date" : "20/12/2020",
     },
     {
         "id" : "2",
         "name" : "barbeque",
         "description" : "foodelicious",
         "date" : "20/12/2020",
     }
    ]
    res.json(events);
 })


module.exports = router;
