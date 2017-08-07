// test.js

const fs = require('fs-extra');

fs.emptyDir('./test', (err) => {
	if(err) {
		console.log('Error', err);
	}


	console.log('Folder created !');
});