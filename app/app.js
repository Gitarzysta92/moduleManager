const fs = require('fs');
const path = require('path');


class DirMap {
	constructor(startDir) {
		this.directory = startDir.split(path.sep).join('/');
		this.dirs = [];
		this.model = [];
	}

	init() {
		return this.recursiveDirWalker(this.directory);
	}

	recursiveDirWalker(entryPath) {	
		const checkDir = new Promise((resolve, reject) => {
			fs.stat(entryPath, (err, stats) => {
				if (stats.isDirectory()) {
					const readDir = new Promise((resolve, reject) => {
						fs.readdir(entryPath, (err, result) => {
							resolve(this.validation(result));
						});		
					}).then(result => {					
						const nextIterations = [];
						result.forEach(item => {
							const currentPath = entryPath.concat('/'+ item);
							nextIterations.push(this.recursiveDirWalker(currentPath));
						}) 
						return nextIterations;
					}).then(x => {
						Promise.all(x).then(x => resolve(x));
					}).catch(err => err);
				} else if(stats.isFile()) {
					resolve(entryPath);
				}
				this.dirs.push(entryPath);
			});
		})
		return checkDir;
	}

	async dirModel() {
		await this.recursiveDirWalker(this.directory)
			.then(() => {
				this.dirs.forEach((item, key, array) => {
					const isPath = /\./i;					
					if (!isPath.test(item)) {
						const dir = item.replace(this.directory, '');
						const pathName = dir.substr(1);
						const itemGroup = [];

						
						array.forEach(item => {
							const wrapper = item.split('/');
							if (item.indexOf(pathName) > 0 && isPath.test(item)) {
								const mod = {
									url: item,
									currentFolder: pathName,
									wrapperFolder: wrapper[wrapper.length-3]
								}
								itemGroup.push(mod);		
							}
						})
						this.model.push(itemGroup);
						//{[pathName] :itemGroup}
					}
				})
			});
			console.log(this.model);
			return this.model;	
	}


	validation(pathItems) {
		const validated = [];
		const exclude = /(node_modules|\.git|\.gitignore)$/i;
		pathItems.forEach(item => {
			if (!exclude.test(item)) validated.push(item);	
		}) 
		return validated;
	}	
		

	dirValidation(directory) {
		const node = /(node_modules|\.git|\.gitignore)$/i;
		return !node.test(directory);
	}

	fileValidation() {
		const file = /as$/;
		return !file.test(filePath);
	}

}





class App {
	constructor(args) {
		this.root_dir = args[0];

		this.modules = new DirMap(this.root_dir);

		this.modules.dirModel().then(x=> console.log(x));

	}

	met() {
		
		//return this.db.then(db =>  db);
		return this.method;
	}

}






module.exports = (function() {	
	this.app;
	function createInstance(args) {
		const app = new App(args);
		return app;
	}

	return {
		init: function(...args) {
				this.app = createInstance(args);
				delete this.init;
			}
	}
})();



/*

	registerModules() {
		const items = [];
		//console.log(this.root_dir)
		//console.log(require.main);
		this.readFolder(this.root_dir)
			.then(items => this.compareArrays(items))
			.then(items => this.modules = items)
			.then(items => this.findModules(items))
			.then(items => console.log(items));
		
	}

	compareArrays(arr) {
		const finalarray = [];

		this.modules.forEach((module) => 
			arr.forEach((file) => { 
				if (module === file) {
					finalarray.push(module);
				}
			}) 
		)
		return finalarray;
	}

	readFolder(folderDir) {
		let list = new Promise((resolve, reject) => {
			fs.readdir(folderDir, function(err, items){
				resolve(items);
				reject(err)
			});
		});
		return list;
	}

	findModules(items) {
		const found = ['asd']
		items.forEach(item => {
			const dir = this.root_dir;

			 this.readFolder(path.resolve(dir, item))
				.then(item => {
					//const modulePath = path.resolve()
					found.push(item); 
					//console.log(item);
				});
		})
		return found;
	}

*/