const array = ['test','value'];

const inter = {
	addProperty: function(func) {
		this.callback = func;
	}
}

module.exports.connect = (callback) => {
	inter.addProperty(callback); 
};

module.exports.register = (callback) => {
	callback(inter);
}


