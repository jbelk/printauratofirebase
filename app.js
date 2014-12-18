var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var routes = require('./routes/index');
var users = require('./routes/users');
var CronJob = require('cron').CronJob;
var rest = require('restler');
var Firebase = require("firebase");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

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

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;


//var job = new CronJob({
  //cronTime: '0 * * * *',
//  onTick: function() {

var listbrandsref = new Firebase('https://printaurasync1.firebaseio.com/listbrands');

rest.post('http://www.api.printaura.com/api.php', {
        multipart: true,
        data: {
            key: '3t84DFABG0085IuLNPjuakZ8a4rG1B38', 
            hash: 'hif0fGEB14n969Mf4dOpTvf69m05OsyuUlwNios17sB7fp7Y1O28GD4ANSyXE1dD', 
            method: 'listbrands'
        }
    }).on("complete", function(data) {
        listbrandsref.set(data);
        console.log('Brands updated');
        //listbrandsref.on('value', function (snapshot) {
        //allProducts = JSON.parse(snapshot.val());
        //console.log(allProducts.results);
            
        //}, function (errorObject) {
        //console.log('The read failed: ' + errorObject.code);
        //});
    });


var listsizesref = new Firebase('https://printaurasync1.firebaseio.com/listsizes');

rest.post('http://www.api.printaura.com/api.php', {
        multipart: true,
        data: {
            key: '3t84DFABG0085IuLNPjuakZ8a4rG1B38', 
            hash: 'hif0fGEB14n969Mf4dOpTvf69m05OsyuUlwNios17sB7fp7Y1O28GD4ANSyXE1dD', 
            method: 'listsizes'
        }
    }).on("complete", function(data) {
        listsizesref.set(data);
        console.log('Sizes updated');
        //ref.on('value', function (snapshot) {
        //allProducts = JSON.parse(snapshot.val());
        //console.log(allProducts.results);
            
        //}, function (errorObject) {
        //console.log('The read failed: ' + errorObject.code);
        //});
    });

var listcolorsref = new Firebase('https://printaurasync1.firebaseio.com/listcolors');

rest.post('http://www.api.printaura.com/api.php', {
        multipart: true,
        data: {
            key: '3t84DFABG0085IuLNPjuakZ8a4rG1B38', 
            hash: 'hif0fGEB14n969Mf4dOpTvf69m05OsyuUlwNios17sB7fp7Y1O28GD4ANSyXE1dD', 
            method: 'listcolors'
        }
    }).on("complete", function(data) {
        listcolorsref.set(data);
        console.log('colors updated');
        //ref.on('value', function (snapshot) {
        //allProducts = JSON.parse(snapshot.val());
        //console.log(allProducts.results);
            
        //}, function (errorObject) {
        //console.log('The read failed: ' + errorObject.code);
        //});
    });




var listproductsref = new Firebase('https://printaurasync1.firebaseio.com/listproducts');

 rest.post('http://www.api.printaura.com/api.php', {
        multipart: true,
        data: {
            key: '3t84DFABG0085IuLNPjuakZ8a4rG1B38', 
            hash: 'hif0fGEB14n969Mf4dOpTvf69m05OsyuUlwNios17sB7fp7Y1O28GD4ANSyXE1dD', 
            method: 'listproducts'
        }
    }).on("complete", function(data) {
        listproductsref.set(data);
        console.log('Products updated');
        //ref.on('value', function (snapshot) {
        //allProducts = JSON.parse(snapshot.val());
        //console.log(allProducts.results);
            
        //}, function (errorObject) {
        //console.log('The read failed: ' + errorObject.code);
        //});
    });

//on tick done
//console.log('firebase updated!');
//},
 // start: true,
 // timeZone: "America/Los_Angeles"
//});
//job.start();   



