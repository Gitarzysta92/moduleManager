const mod = new Mod(__filename);
mod.expect({name: 'module.first.js'});

mod.publish(function(first) {
	const keys = Object.keys(first);
	return keys.reduce((acc, curr) => `${acc} ${first[curr]}, `, '');
});

module.exports = mod;