console.time('funchallenge')
const fs = require('fs');

fs.readFile('./input.txt', (err, data) =>{
	if (err) {
		console.log(err, ' error');
	}
	const inputString = data.toString('utf8');
	const arr = inputString.split('');
	let ctr = 0;
	for (let i = 0; i < arr.length; i++){
		if (arr[i] === '('){
			ctr++;
		}
		else{
			ctr--;
		}
	}
	console.timeEnd('funchallenge');
	console.log(ctr);
})


//console.time('funchallenge')
//console.timeEnd('funchallenge')