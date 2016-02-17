var r = require('rethinkdb'),
	config = require('../config');

r.connect(config.rethinkdb).then(function(conn) {
	r.conn = conn;
	console.log('connected');
});

module.exports = r;
