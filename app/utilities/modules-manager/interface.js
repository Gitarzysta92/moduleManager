const moduleManager = {
	modules: {},
	addModule: function(module) {
		this.modules[module.name] = module;
	},
	getModule: function(query) {
		return this.modules[query];
	}
}

module.exports.register = (moduleObject) => {
	moduleManager.addModule(moduleObject); 
};

module.exports.getDependency = (moduleQuery) => {
	return moduleManager.getModule(moduleQuery);
};