const server = require('./server/server'),
	app = require('./core'),
	path = require('path'),
	port = process.env.NODE_ENV === 'production' ? 80 : 3000;



//const asd = asd   => 

const launch = (port, app) => {
	server.run(port, app)
	app.init(__dirname);

};

//const app = function() {

//}


launch(port, app);