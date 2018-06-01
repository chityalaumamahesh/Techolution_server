var express = require('express');
var userRoutes = express.Router();

var User = require('../models/user.js');

userRoutes.get('/getmakedetails', function(req, res) {
    console.log("http://192.168.43.234:3400/api/getmakedetails")
    User.user.find(function(err, users) {
        
        if (err) {
            res.send(err);
        } else {
            res.send(users);
        }
    })
})
userRoutes.get('/getmodeldetails', function(req, res) {

    User.model.find(function(err, users) {
        if (err) {
            res.send(err);
        } else {
            console.log(users, "users")
            var matcheduser = null
            for (var i = 0; i < users[0].modelData.length; i++) {
                if (users[0].modelData[i].make == req.query.make && users[0].modelData[i].model == req.query.model) {
                    matcheduser = users[0].modelData[i];
                    console.log('matcheduser', matcheduser);
                }
            }
            res.send(matcheduser);
        }
    })
})
userRoutes.get('/getmakedetailsother', function(req, res) {
        User.userother.find(function(err, makes) {
            if (err) {
                res.send(err);
            } else {
                res.send(makes);
            }
        })
    })
    // userRoutes.get('/getonlymakedetails', function(req, res) {
    //     User.userother.find(function(err, makes) {
    //         let responseObj = []
    //         if (err) {
    //             res.send(err);
    //         } else {
    //             for (let i = 0; i < res.length; i++) {
    //                 responseObj.push(makes[i].name)
    //             }
    //             res.send(responseObj);
    //         }
    //     })
    // })
userRoutes.get('/getonlymakedetails', function(req, res) {
    console.log("entered into make details")
    User.userother.find(function(err, makes) {
        console.log("makes resp")
        let responseObj = []
        if (err) {
            res.send(err);
        } else {
            console.log(makes, "makes")
            for (let i = 0; i < makes.length; i++) {
                responseObj.push(makes[i].name)
            }
            res.send(responseObj);
        }
    })
})
userRoutes.get('/getonlymodeldetails', function(req, res) {
    var reqObj = {
        name: req.query.name,
    }
    console.log(reqObj, "my model req")
    User.userother.find(reqObj, function(err, makes) {
        let modelresponseObj = []
        if (err) {
            res.send(err);
        } else {
            console.log(makes, "makesObj2")
            modelresponseObj = makes[0].models
            res.send(modelresponseObj);
        }
    })
})

userRoutes.get('/getmodeldetailsother', function(req, res) {
    var reqObj = {
        make: req.query.make,
        model: req.query.model
    }
    console.log(reqObj, "reqObj")

    User.modelother.findOne(reqObj, function(err, users) {
        if (err) {
            res.send(err);
        } else {
            res.send(users);
        }
    })
})


module.exports = userRoutes;