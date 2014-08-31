// server.set

// This is common set up of the tools I most commonly use ======================================================================
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 80;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var path = require('path')

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');


// In case we will use a mongoDB database
// var configDB = require('./config/database.js');
// mongoose.connect(configDB.url); // connect to our database

// Passport module for login functions 
// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
// Set up the static directory 
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// EJS templating engine 
app.set('view engine', 'ejs'); 

// required for passport
app.use(session({ secret: 'mavensoflondon' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



// Server roots  ======================================================================

require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('All cool things take place on port ' + port);
