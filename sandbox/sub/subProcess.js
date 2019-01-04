

const handleFunction = {text: () => 'asd'}

process.on('message', function(msgobj){
	console.log('Proces podrzędny otrzymał komunikat:', msgobj.text);
	process.send({
		text: handleFunction
	});
});

console.log(process.connected);

console.log(process.pid);
