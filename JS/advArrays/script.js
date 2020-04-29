let array = [1,2,10,16];

const double = [];

const newArray = array.forEach((num) => {
	double.push(num * 2);

})

console.log(newArray);

//map, filter, reduce

const mapArray = array.map(num => num * 2);

console.log(mapArray);

//filter

const filterArray = array.filter(num => num > 5);

//reduce

const reduceArray = array.reduce((acc, num) => {
	return acc + num;
}, 0);

console.log('reduce');