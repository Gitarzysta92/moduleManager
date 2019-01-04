const module_init = require('./initializer');
const { connect } = require('./interface');

const app = ['app']

const passedFunction = () => {
	return app;
}

connect(passedFunction.bind(app));

