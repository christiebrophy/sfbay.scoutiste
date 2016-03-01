var express = require('express');
var userRouter = express.Router();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://cbrophy:scoutiste_2@ds057204.mongolab.com:57204/scoutiste_2';


userRouter.use('/', function(req, res, next) {
           if(!req.user) {
                res.redirect('/');
            }
            next();
});

var router = function (nav) {
    userRouter.route('/')
        .get(function (req, res) {
            res.render('users', {user: {
                                    name: req.user.displayName,
                                    image: req.user.image}
            });
        });
        
    return userRouter;
};


          
            




module.exports = router;