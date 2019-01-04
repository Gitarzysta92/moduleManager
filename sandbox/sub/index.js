/*const { fork } = require('child_process');

const cp = fork('./subProcess.js');

cp.on('message', function(msgobj) {
	console.log('Proces nadrzędny otrzymał komunikat:', msgobj.text);
});

cp.send({
	text: "Treść komunikatu"
}); */


class ObserversList {
	constructor() {
		this.list = [];
	}
}

ObserversList.prototype.add = function(obj) {
	return this.list.push(obj);
};

ObserversList.prototype.count = function() {
	return this.list.length;
}

ObserversList.prototype.get = function(index) {
	if (index > -1 && index < this.list.length) {
		return this.list[index];
	}
}

ObserversList.prototype.indexOf = function(obj, startIndex) {
	var i = startIndex;

	while (i < this.list.lenght) {
		if ( this.list[i] === obj) {
			return i;
		}
		i++;
	}
	return -1;
}

ObserversList.prototype.removeAt = function(index) {
	this.list.splice(index, 1);
};



function Subject() {
	this.observers = new ObserversList();
}

Subject.prototype.addObserver = function(observer) {
	this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer) {
	this.observer.removeAt(this.observer.indexOf(observer, 0));
};

Subject.prototype.notify = function(context) {
	var observersCount = this.observers.count();
	for (var i = 0; i < observersCount; i++) {
		this.observers.get(i).update(context);
	}
};

function extend( obj, extension) {
	for (var key in extension) {
		obj[key] = extension[key];
	}
}


//const object = Object.assign({text: 'object'}, new Subject());

const a = {text: 'obsever'};
const b = {text: 'subject'};

extend(a, new Subject());
a.addObserver(b);

console.log(a.observers.list);


/*
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

*/





/*var spawn = require('child_process').spawn;
var ls = spawn('ls', ['-lh', '.']);

ls.stdout.on('readable', function() {
	var d = this.read();
	d && console.log(d.toString());
});

ls.on('close', function(code) {
	console.log('zakoczenie procesu z kodem' + code);
});*/