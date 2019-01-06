const modulesInit = require('./initializer');
//const { register } = require('./interface');



//register(modules.init());

const manager = {
	dependency: function(module) {
		console.log(module);
		this.dirMapper = module;
	},

	api: function() {
		//console.log(this.dirMapper);
	}
}


const config = (function() {

})();


function expect(args) {
	return args;
}

module.exports = (function(args) {
	return expect(args);
})




//module.exports.init = manager.dependency;

//module.exports.api = manager.api;
