// ###################
// Load module manager
// 
const Manager = require('./system/modules-manager');
const manager = new Manager();
// Register modules with given subname
const modulesType = ['.mod.','.config.','.routes.'];
const modulesList = manager.registerModules(modulesType);