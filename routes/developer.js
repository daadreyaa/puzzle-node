const express = require("express");
const router = express.Router();
const Developer = require('../models/DeveloperModel');

const connection = require('../utils/config')


router.get('/', (req, res) => {
    res.json({ message: "Developer Route" });
});

router.post('/register', (req, res) => {
    let developer = new Developer({
        userName: req.body.userName,
        email: req.body.email,
        domainName: req.body.domainName,
        // password: req.body.password,
    });

    developer.setPassword(req.body.password);

    developer.save()
        .then(data => {
            res.json({ message: "Developer Added Successfully", devId: data._id });
        })
        .catch(err => {
            res.json({ message: "Failed to add Developer", err: err });
        });
});

router.post('/login', (req, res) => {
    Developer.findOne({ email: req.body.email }).then(developer => {
        if (developer.validPassword(req.body.password)) {
            // let tokenData = generateAccessToken({
            //     devId: req.body.devId,
            // });
            res.json({ message: "User Logged In", "devId": developer['_id'] });
        } else {
            res.json({ message: "Wrong Password" })
        }
    }).catch(err => {
        res.json({ message: "User Not Found" });
    });
});

router.get('/posts', (req, res) => {
    const collection = connection.db.collection("developers");
    collection.find({}).toArray(function (err, data) {
        res.json(data); // it will print your collection data
    });
});

module.exports = router;