// Async await

movePlayer(100, 'Left')
	.then(() => movePlayer(400, 'Left'))
	.then(() => movePlayer(10, 'Right'))
	.then(() => movePLayer(330, 'Left'))

async function playerStart(){
	const first = await movePlayer(100, 'Left');
	const second = await movePlayer(400, 'Left');
	const third = await movePlayer(10, 'Right');
	const fourth = await movePlayer(330, 'Left');
}

async function fetchUsers(){
	const resp = await fetch('https://jsonplaceholder.typicode.com/users')
	const results = await resp.json();
	console.log(results);
}

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
];

async function getData(){
	try{
		const [users, posts, albums] = await Promise.all(urls.map(url =>
			fetch(url).then(resp => resp.json())
		))
		console.log('users',users);
		console.log('posts',posts);
		console.log('albums', albums;
	}
	catch (err){
		console.log(err + 'oops');

	}
}
