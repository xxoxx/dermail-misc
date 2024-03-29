var express = require('express'),
	logger = require('morgan'),
	r = require('./lib/db'),
	config = require('./config'),
	app = express();

if (process.env.RDB_HOST) app.use(logger('dev'));

require('./routes/safe')(app, r);

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
	res.send({
		message: err.message,
		error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
	  message: err.message,
	  error: {}
  });
});


module.exports = app;
