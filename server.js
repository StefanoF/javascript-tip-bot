var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

var port = process.env.PORT || 8080;
var ipaddress = process.env.IP || '127.0.0.1';

// configuration ===============================================================

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(express.static('public'));
app.use(bodyParser.json({limit: '10mb'}));

// routes ======================================================================
require('./routes/apiRoutes')(app);

// launch ======================================================================
app.listen(port, ipaddress);
console.log('The magic happens on port ' + port);
