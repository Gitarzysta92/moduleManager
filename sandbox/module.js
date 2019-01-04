const { register } = require('./interface');

const result = register(function(inter) {
	setTimeout(function() {
		console.log(inter.callback());
	}, 10);
	
});