// initialize module
const mod = new Mod(__filename);
// define internal dependencies
mod.expect({name: 'module.third.js'});

const text = 'Hello from second module'

mod.publish(function(third) {
	return Object.defineProperty(third, 'second', {
		value: text,
		enumerable:true
	});
});

module.exports = mod;