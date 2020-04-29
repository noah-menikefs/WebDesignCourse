const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
}

//for
for (let i = 0; i < basket.length; i++){
	console.log(basket[i]);
}


//forEach
basket.forEach(item => {
	console.log(item);
})

//for of
// Iterating
for (item of basket){
	console.log(item);
}

//for in
for (item in detailedBasket){
	console.log(item);
}