// !IMPORTANT!
// 
// This simple app was created only for learning purposes
// some time ago and I realize that many solutions are 
// not entirely good. Please treat it like one of the old
// steps in my learning process.
//
//
// Known issues:
// - circural dependencies leads to infinite loop
// - overengineered parts of code
// - probably some unhandled errors :( 


// ###################
// Load module manager

const ignoreList = [
  'node_modules', 
  '.gitignore',
  '.git',
  'package-lock.json', 
  'package.json', 
  'README.md'
];

const Manager = require('./modules-manager');
const manager = new Manager({ignoreList});


// Register modules with given subname
const modulesType = ['.root.','.first.','.second.','.third.'];
const modulesList = manager.registerModules(modulesType);



const rootModule = modulesList.getPublished({name: 'module.root.js'})
console.log(rootModule);