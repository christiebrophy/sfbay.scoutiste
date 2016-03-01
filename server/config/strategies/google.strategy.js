var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://cbrophy:scoutiste_2@ds057204.mongolab.com:57204/scoutiste_2';
var User = require('../../../models/userModel');

module.exports = function () {
    passport.use(new GoogleStrategy({
            clientID:'217036610297-fjh5kcrofg56eob9gpndscasqohr0764.apps.googleusercontent.com',
            clientSecret:'5aZaFu5E2Y91Uj3SMo9yNUOb',
            callbackURL: 'http://localhost:5000/auth/google/callback'},  
        function (req, accessToken, refreshToken, profile, done) {
            var query = {
            'google.id': profile.id
            };
            
            User.findOne(query, function (error, user) {
                if (user) {
                    console.log('found');
                    done(null, user);
                } else {
                    console.log('not found');
                    var user = new User;
                    user.email = profile.emails[0].value;
                    user.image = profile._json.image.url;
                    user.displayName = profile.displayName;
                    user.google = {};
                    user.google.id = profile.id;
                    user.google.token = accessToken;
                    user.save();
                    done(null, user);
            }
        });
        }));
                                
};