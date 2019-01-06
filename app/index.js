

/*
this.root_dir = args[0];
		this.modulesIgnorePattern = ['node_modules', '.gitignore','.git','package-lock.json', 'package.json', 'README.md']
		this.modules = new DirMap(this.root_dir, this.modulesIgnorePattern);
		this.modules.getFilesList(['module-2']).then(result => console.log(result));

		this.modules.getSingleFile(['module-2.js']).then(result => console.log(result));
	}
*/
const app = {
	config: { 
		name: 'mongo-config',
		type: 'config',
		data: 'object',
		dir: ''
	},

}

const dirMapper = require('./utilities/dir-mapper');

const modules = {
	mongoConfig: { 
		name: 'mongo-config',
		type: 'config',
		data: 'object',
		dependencies: [],
		dir: ''
	},
	dirMapper: {
		name: 'dir-mapper',
		type: 'helper',
		data: dirMapper,
		dependencies: [],
		dir: ''
	}
}



// setup module manager
app.modulesManager = require('./utilities/modules-manager')({app});
app.mongoInstance = require('./services/module-1/module-1')(modules);


console.log(new app.mongoInstance.data);


module.exports.app = {
}
