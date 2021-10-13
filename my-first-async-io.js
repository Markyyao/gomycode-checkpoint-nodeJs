let fs = require('fs');

fs.readFile(process.argv[1], {encoding: 'utf8'}, (err, data) =>{
    let numberLine = data.toString().split('\n').length -1;
	if (err) {
		throw err;
	}
	else {
		console.log(numberLine);
	}
});

