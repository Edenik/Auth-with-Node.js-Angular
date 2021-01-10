require('../data/database');
const express = require('express');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const router = express.Router();
const userModel = require('../models/User');

router.get('/', (req, res) => {
    res.send('hello auth');
})


router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send('All fields are required!');
        return;
    }
    userModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.status(500).send('Error');
            return;
        }
        if (!user) {
            res.status(400).send('Login Failed');

        } else {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) { throw err; };
                if (result) {
                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({ token });
                } else {
                    res.status(400).send('Login Failed');
                }
            })
        }

    })

})

router.post('/register', (req, res) => {
    let userData = req.body;
    if (userData.email && userData.password) {
        bcrypt.hash(userData.password, 10, (err, hash) => {
            let user = new userModel({ email: userData.email, password: hash });
            user.save((err, registeredUser) => {
                if (err) {
                    console.log(err);
                } else {
                    let payload = { subject: registeredUser._id };
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({ token });
                }
            });
        })
    }
})



/* Other functions - only for dev, no production */
router.get("/all", async (req, res) => {
    userModel.find({}, (err, users) => {
        if (err) res.status(404).send(err);
        if (!users) res.status(404).send({ Err: 'no users found' });
        res.status(200).send(users)
    });
});

router.get("/userByID/:id", (req, res) => {
    userModel.findById(req.params.id, (err, user) => {
        if (err) res.status(404).send(err);
        if (!user) res.status(404).send({ Err: 'no users found' });
        res.status(200).send(user)
    });
});


router.get("/userByEmail/:email", (req, res) => {
    try{
     const query = userModel.where({email:req.params.email})
     query.findOne( (err, user) => {
         if (err) res.status(404).send(err);
         if (!user) res.status(404).send({ Err: 'no users found' });
         res.status(200).send(user)
     });
    }catch(err){
     res.status(404).send(err);
    }
 });

 router.put("/userByEmail", (req, res) => {
    try{
     userModel.findOneAndUpdate({email:req.body.email}, {password:req.body.password}, (err, user) => {
         if (err) res.status(404).send(err);
         if (!user) res.status(404).send({ Err: 'no users found' });
         res.status(200).send(user)
     });
    }catch(err){
     res.status(404).send(err);
    }
 });



router.post('/newUser', (req, res) => {
    let user = new userModel({ email: req.body.email, password: req.body.password });
    user.save((err, registeredUser) => {
        if (err) {
            res.status(404).send({ Error: "cant save this user" })
            return;
        }

        res.status(201).send(registeredUser);
    })
})


module.exports = router;
