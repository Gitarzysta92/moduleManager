const server = require('./server/server'),
	app = require('./app'),
	path = require('path'),
	port = process.env.NODE_ENV === 'production' ? 80 : 3000;




const launch = (port, app) => {
	server.run(port, app)

};

launch(port, app);