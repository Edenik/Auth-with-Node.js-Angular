require('../data/database');
const express = require('express');
const router = express.Router();
const userModel = require('../models/User');

router.get('/' , (req,res) => {
    res.send('hello auth');
})


router.post('/login' , (req,res) => {
    if(!req.body.email || !req.body.password){
        res.status(400).send('All fields are required!');
        return;
    }
    userModel.findOne({email: req.body.email} , (err , user) => {
        if(err){
            res.status(500).send('Error');
            return;
        } 
        if(!user){
            res.status(400).send('Login Failed');
            
        } else {
            if(user.password == req.body.password){
                res.status(200).send(req.body);
            } else {
                res.status(400).send('Login Failed');
            }
        }

    })

})

router.post('/register', (req,res) => {
    let userData = req.body;
    if(userData.email && userData.password){
        let user = new userModel(userData);
        user.save((err, registeredUser) => {
            if(err){
                console.log(err);
            } else {
                res.status(200).send('Registered Successfully')
            }
        });
    }
})



module.exports = router;
