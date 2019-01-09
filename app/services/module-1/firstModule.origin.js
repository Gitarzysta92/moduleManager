const mod = new Mod(__filename);
mod.setType('utils');

mod.expect({name: 'mongoConfig.origin.js'});
mod.expect({name: 'secondModule.origin.js'});

const _test = 'test'

function checkTest() {
	return _test + ' done';
}

mod.publish(function(config, secondModule) {
	return {checkTest};
});



module.exports = mod;






