var express = require('express');
var passport = require('passport');
var authRouter = express.Router();


var router = function (nav) {
    authRouter.route('/google/callback')
        .get(passport.authenticate('google', {
            successRedirect: '/users/',
            failure: '/error/'}
        ));
                 
                                   
    authRouter.route('/google')
            .get(passport.authenticate('google', {
            scope: ['https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email']
            }));
    


    return authRouter;
    
};                           


module.exports = router;