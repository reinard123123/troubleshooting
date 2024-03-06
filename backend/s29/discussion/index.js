console.log("Hello World!");

// Non-Mutator Methods
/*
	- None-Mutator methods are functions that DO NOT MODIFY or CHANGE an array after they are created
*/

let countries = ['US', 'PH', 'CAN', 'SG', 'TH', 'PH', 'FR', 'DE'];

// indexOf()
/*
	- returns the index of the first matching element found in an array
*/

let firstIndex = countries.indexOf('PH');
console.log('Result of indexOf method: ' + firstIndex);

// If no match was found, the result will be -1
let invalidCountry = countries.indexOf('BR');
console.log('Result of indexOf method: ' + invalidCountry);


// lastIndexOf()
/*
	- returns the index number of the last matching element found in an array
*/

// Getting the index number starting from the last element
let lastIndex = countries.lastIndexOf('PH');
console.log('Result of lastIndexOf method: ' + lastIndex);

// Getting the index number starting from a specified index
let lastIndexStart = countries.lastIndexOf('PH', 4);
console.log('Result of lastIndexOf method: ' + lastIndexStart);


// slice()
/*
	- protions/slice elements from an array AND returns a new array

	Sytanx:
		arrayName.slice(startingIndex);
		arrayName.slice(startingIndex, endingIndex);
*/

// Slicing off elements from a specified index to the last element
let slicedArrayA = countries.slice(2);
console.log('Result from slice method:');
console.log(slicedArrayA);

console.log(countries);

// Slicing off elements from a specified index to another index
let slicedArrayB = countries.slice(1, 6);
console.log('Result from slice method:');
console.log(slicedArrayB);


// Slicing off elements starting from the last element of the array
let slicedArrayC = countries.slice(-3);
console.log('Result from slice method:');
console.log(slicedArrayC);


// toString()
/*
	- return an array as a string separated by commas
*/

let stringArray = countries.toString();
console.log("Result from toString method:");
console.log(stringArray);


// concat()
/*
	- combine two arrays and returns the combined result
*/

let tasksArrayA = ['drink html', 'eat javascript'];
let tasksArrayB = ['inhale css', 'breathe sass'];
let tasksArrayC = ['get git', 'be node'];

let tasks = tasksArrayA.concat(tasksArrayB);
console.log("Result from concat method:");
console.log(tasks);

// Combining multiple arrays
let allTasks = tasksArrayA.concat(tasksArrayB, tasksArrayC);
console.log("Result from concat method:");
console.log(allTasks);

// Combining arrays with elements
let combinedTasks = tasksArrayA.concat('smell express', 'throw react');
console.log("Result from concat method:");
console.log(combinedTasks);


// join()
/*
	- returns an array as a string separated by specified separator string

	Syntax:
		arrayName.join('separatorString');
*/

let users = ['John', 'Jane', 'Joe', 'Robert'];

console.log(users.join());
console.log(users.join(''));
console.log(users.join(' - '));


// Iteration Methods
/*
	- Iteration methods are loops designed to perform repetitive tasks on arrays
	- iteration methodes loops over all items in an array.
*/

// forEach()
/*
	- Similar to a for loop that iterates on each array elements/items.
	- FOr each item in the array, the anonymous function passed in the forEach() method will be run.
	- It does not return any things.

	- Syntax:
		arrayName.forEach(function(indivElement){
			statement
		});
*/

allTasks.forEach(function(task){
	console.log(task);
});


// Using forEach with conditional statements
let filteredTasks = [];

// Looping through all Array items
allTasks.forEach(function(task){

	console.log(task);

	// If the element/string's length is greater than 10 characters
	if(task.length > 10){

		filteredTasks.push(task)
	}

});

console.log("Result of filtered tasks:");
console.log(filteredTasks);

// map()
/*
	- Iterates on each element AND returns a new array with different values depending on the result of the function's operation.

	Syntax:
		let/const resultArray = arrayName.map(function(indivElement){
			return statement
		});
*/

let numbers = [1, 2, 3, 4, 5];

let numberMap = numbers.map(function(number){
	return number * number;
})

console.log("Original Array");
console.log(numbers);
console.log("Result of map method:");
console.log(numberMap);

// map() vs forEach()
let numberForEach = numbers.forEach(function(number){
	return number * number;
})

console.log(numberForEach);


// every()
/*
	- checks if all elements in an array meet the given condition
	- This is useful for validating data stored in arrays especially when dealing with large amounts of data.

	Syntax:
		let/const resultArray = arrayName.every(function(indivElement){
			return expression/condition
		})
*/

let allValid = numbers.every(function(number){
	return (number < 3);
});

console.log("Result of every method:");
console.log(allValid);


// some()
/*
	- checks if at least one element in the array meets the given condition. returns true if it does.

	Syntax:
		let/const resultArray = arrayName.some(function(indivElement){
			return expression/condition
		})
*/

let someValid = numbers.some(function(number){
	return (number < 2);
});

console.log("Result of some method:");
console.log(someValid);

// Combining the returned result from the every/some method may be used in other statements to perform consecutive results
if(someValid){
	console.log("Some numbers in the array are greater than 2");
}

// filter()
/*
	- Returns new array that contains elements with meets the given condition.

	Syntax:
		let/const resultArray = arrayName.filter(function(indivElement){
			return expression/condition
		})
*/

let filterValid = numbers.filter(function(number){
	return (number < 3);
});
console.log("Result of filter method:");
console.log(filterValid);

// No elements found
let nothingFound = numbers.filter(function(number){
	return (number == 0);
});
console.log("Result of filter method:");
console.log(nothingFound);

// includes()
/*
	- checks if the argument passed can be found in the array
	- returns a boolean.

*/

let products = ['Mouse', 'Keyboard', 'Laptop', 'Monitor'];

let productFound1 = products.includes('Mouse');
console.log(productFound1);

let productFound2 = products.includes('Headset');
console.log(productFound2);

// Methods can be "chain" using them one after another
let filteredProducts = products.filter(function(product){
	return product.toLowerCase().includes('a');
});

console.log(filteredProducts);

// reduce()
/*
	- Evaluates elements from left to right and returns/reduces the array into a single value.

	Syntax;
		let/const resultArray = arrayName.reduce(function(accumulator, currentValue){
			return express/operation
		});

	- the "accumulator" parameter in the function stores the result for every iteration of the loop
	- the "currentValue" is the current/next element in the array that is evaluated in each iteration of the loop.
*/

// let numbers = [1, 2, 3, 4, 5];

let iteration = 0;

let reducedArray = numbers.reduce(function(x, y){

	console.warn('current iteration: ' + ++iteration);
	console.log('accumulator: ' + x);
	console.log('currentValue: ' + y);

	// This is the operation to reduce the array into a single value.
	return x + y;
});

console.log("Result of reduce method: " + reducedArray);

// reducing string arrays
let list = ['Hello', 'Again', 'World'];

let reducedJoin = list.reduce(function(accumulator, currentVal){

	return accumulator + " " + currentVal;
})

console.log("Result of reduce method: " + reducedJoin);