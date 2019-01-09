const mod = new Mod(__filename);

mod.setType('utils');
mod.expect({name: 'firstModule.origin.js'});

mod.publish(function(first) {
	return 'second module';
});

module.exports = mod;