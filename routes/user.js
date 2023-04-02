const express = require("express");
const router = express.Router();
const User = require('../models/UserModel');


router.get('/', (req, res) => {
    res.json({ message: "User Route" });
});

router.post('/register', (req, res) => {
    let user = new User({
        userId: req.body.userId,
        // devId: req.body.devId,
        password: req.body.password
    });

    user.save()
        .then(data => {
            res.json({ message: "User Added Successfully" });
        })
        .catch(err => {
            res.json({ message: "Failed to add User", err: err });
        });
});

router.post('/login', (req, res) => {
    console.log(req.body)
    User.findOne({ userId: req.body.userId, password: req.body.password })
        .then(user => {
            console.log(user);
            res.json({ message: "User Matched Successfully" })
        })
        .catch(err => {
            res.statusCode(403).json({ message: "User not found" })
        })
})

router.post('/getPuzzleId', (req, res) => {
    User.findOne({ userId: req.body.userId, devId: req.body.devId })
        .then(user => {
            console.log(user);
            res.json({ puzzleId: user.puzzleId });
        }).catch(err => {
            res.json({ message: "User Not Found" });
        });
});

router.get('/users', (req, res) => {
    res.setHeader('Access-Control-Expose-Header', 'Content-Range');
    res.setHeader('Content-Range', 'posts 0-24/319');
    User.find({})
        .then(users => {
            res.json({ users: users });
        })
        .catch(err => {
            res.json({ message: err });
        })
});

module.exports = router;
