
//
// Need refactor - circural dependencies leads to infinite loop
//


module.exports = class ModulesLibrary  {
	constructor(filesList = []) {
		this.modules = [];
		this.stack = [];
		filesList.length > 0 && this.load(filesList);
	}

	// Modules initializer API
	getModule(query) {
		return this.getDependency(query, this.modules);
	}


	getModules(query) {
		return this.modules.filter(current => this.getDependency(query, [current]));
	}


	getPublished(query) {
		return this.getDependency(query, this.modules).published;
	}

	getAllPublished(query) {
		const result = this.modules.filter(current => this.getDependency(query, [current]));
		return this.flatArray(result.map(current => current.published));
	}

	// Modules loader
	load(modulesArray) {
		modulesArray.forEach(current => {
			this.stack.push(require(current));
		});
		this.register();
	}

	register() {
		const current = this.stack.shift();

		if (!current.hasOwnProperty('_dependencyQuery')) return false;
		if (current._dependencyQuery.length > 0){
			current._dependencyQuery = current._dependencyQuery.filter(query => {
				// check is dependency exists in modules array
				// if exists attach it to current module
				const dependency = this.getDependency(query, this.modules);
				if (dependency) return this.attachDependency(current, dependency);

				// check is dependency exists in stack array
				// if exists, leave this query for next iteration
				const isExistInStack = this.getDependency(query, this.stack);
				if (isExistInStack) return true;

				// remove dependency query
				return false;
			});
			this.stack.push(current);
		} else {
			current.ready();
			this.modules.push(current);
		}
		this.stack.length > 0 && this.register();
	}

	getDependency(query, source) {
		const dependency = source.find(function(element) {
			const compareResult = [];
			for (let key in query) {
				const elementProperty = element[key];
				const queryProperty = query[key];
				elementProperty === queryProperty && compareResult.push(true);
			}
			return compareResult.length === Object.keys(query).length ? true : false;
		});
		return dependency ? dependency : false;
	}

	attachDependency(moduleObject, dependency) {
		 if (dependency.hasOwnProperty('id')) {
			moduleObject.addDependency(dependency);
			return;
		}
	}

	flatArray(array, aggregator = []) {
		const aggr = aggregator;
		const toFlat = array;

		toFlat.forEach(current => {
			if (Array.isArray(current)) {
				aggr.concat(this.flatArray(current, aggr));
			} else {
				aggr.push(current);
			}
		}); 
		return aggr; 
	}
}

