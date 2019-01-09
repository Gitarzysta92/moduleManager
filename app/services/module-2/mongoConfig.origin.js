const mod = new Mod(__filename);

mod.setType('config');


const testlogic = function() {
	return 'asd';
}

mod.publish( function() {
	return testlogic;
});




module.exports = mod;