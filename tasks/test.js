// test.js

const fs = require('fs-extra');

fs.emptyDir('./test', (err) => {
	if(err) {
		console.log('Error', err);
	}

	fs.writeJson('./test/test.json', {value:Math.random()}, (err) => {
		if(err) {
			console.log('Error', err);
			return;
		}

		console.log('JSON Created');
	});
});