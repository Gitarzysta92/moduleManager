var fs = require('fs'),
	bodyParser = require('body-parser');

module.exports = (app) => {
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	return app;
}