// initialize module
const mod = new Mod(__filename);
// define internal dependencies
mod.expect({name: 'module.second.js'});

const text = 'Hello from first module'

mod.publish(function(second) {
	return Object.defineProperty(second, 'first', {
		value: text,
		enumerable: true
	});
});

module.exports = mod;