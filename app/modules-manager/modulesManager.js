const path = require('path');
const defaultDirectory = path.dirname(require.main.filename);

require('./moduleWrapper');
const ModulesLib = require('./modulesLibrary');
const dirMapper = require('./directoryMapper.js');




class Manager {
	constructor({DIR = defaultDirectory, ignoreList}) {
		this.directory = DIR;
		this.mapperIgnore = ignoreList;
		this.mapper = new dirMapper(this.directory, this.mapperIgnore);

		return {
			registerModules: this.registerModules.bind(this)
		}
	}

	registerModules(moduleIdentifier) {
		const modulesList = this._findModules(moduleIdentifier);
		this.lib = new ModulesLib(modulesList);
		return this.lib;
	}

	_findModules(moduleIdentifier) {
		const result = this.mapper.getFilesList(moduleIdentifier);
		return result;
	}
}


module.exports = Manager;


