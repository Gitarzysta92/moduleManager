
//
// Main module content
//

class MongoInstance {
	constructor() {
		this.instance = 'database-instance';
		this.config = this.constructor.setConfig();
	}

	getInstance() {
		return this.instance + this.config;
	}

	// setup class when its called
	static setConfig() {
		return _dependencies.config;
	}
}


//
// Module manager section
//

// module expected dependencies
const expectations = {
	config: { 
		name: 'mongo-config',
		type: 'config',
		data: 'object',
		dir: ''
	}
}

// module offered functionality
const offering = {
	name: 'db-instance',
	type: 'helper',
	data: MongoInstance,
	dir: ''
}

// module manager basic object
// !need to create wrapper template
const _module = {
	expectations: _module.toArray(expectations),
	prepare: (args) => {
		if (_module.checkDependencies(args)) {
			_dependencies.setup(args.data);
			return offering;
		} else {
			return 'Dependency does not meet expectations';
		}
	},
	checkDependencies: (dependenciesObj) => {
		const dependencies = _module.toArray(dependenciesObj);

			


		for (key in expectations) {
			console.log(key);
		}

		return true;
	},
	findDependency: (dependenciesArray, toFind) => {
		return dependenciesArray.filter(current => { });
	},

	validateName: (name) => {
		_module.expectations
	},
	toArray: (object) => {
		const array = [];
		for (key in object) {
			array.push(object[key]);
		}
		return array;
	}
}


// 
const _dependencies = {
	setup: function(setupObject) {
		this.config = setupObject;
	}
};


module.exports = _module.prepare


/*
(function(args) {
	_dependencies.setup(args);	
})

*/