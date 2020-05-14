const fs = require('fs');

fs.readFile('./hello.txt', (err, data) =>{
	if (err) {
		console.log(err, ' error');
	}
	console.log('1', data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');

console.log('2', file.toString());

// Append
// fs.appendFile('./hello.txt', ' This is so cooool!', err => {
// 	if (err){
// 		console.log(err);
// 	}
// });

// Write
// fs.writeFile('./bye.txt', 'Sad to see you go', err => {
// 	if (err){
// 		console.log(err);
// 	}
// })

//Delete
fs.unlink('./bye.txt', err => {
	if (err){
		console.log(err)
	}
	console.log('Inception')
})