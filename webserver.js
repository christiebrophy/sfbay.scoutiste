var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');
var mongodb = require('mongodb');

var app = express();

var port = process.env.PORT || 5000;

var path = require('path');
var rootPath = path.normalize(__dirname + '/');
app.use(express.static(rootPath + '/public'));


var itemRouter = require('./server/routes/items');
var authRouter = require('./server/routes/auth');
var userRouter = require('./server/routes/users');
var db = mongoose.connect('mongodb://cbrophy:scoutiste_2@ds057204.mongolab.com:57204/scoutiste_2');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'library'}));


app.use('/items', itemRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);




require('./server/config/passport')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}









app.listen(port, function (err) {
    console.log('running server on port ' + port);
});

module.exports = app;

