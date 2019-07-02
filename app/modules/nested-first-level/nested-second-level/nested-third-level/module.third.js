const mod = new Mod(__filename);

const obj = {
	third: 'Hello from third module'
}

mod.publish(() => obj);

module.exports = mod;