const interfaceDirectory = require.resolve('./modulesInterface.js');
const Module = require('module');


(function(moduleWrapper) {
	Module.wrap = function(script) {
		const moduleInterface = interfaceDirectory.replace(/\\/g, '/');
		script = 'const Mod = require(\''+ moduleInterface +'\');'
		+ script;
		return moduleWrapper(script);		
	};
}(Module.wrap));
