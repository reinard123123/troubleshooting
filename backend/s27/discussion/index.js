console.log("Hello World!");

// An array in programming is simple a list of data.

let studentNumberA = '2020-1923';
let studentNumberB = '2020-1924';
let studentNumberC = '2020-1925';
let studentNumberD = '2020-1926';
let studentNumberE = '2020-1927';

// Now, with an array, we can symply write the code above like this:
let studentNumbers = ['2020-1923', '2020-1924', '2020-1925', '2020-1926', '2020-1927'];

// Common Examples of Arrays
let grades = [98.5, 94.3, 89.2, 90.1];
let computerBrands = ['Acer', 'Asus', 'Lenovo', 'Neo', 'Redfox', 'Gateway', 'Toshiba', 'Fujitsu'];

// Possible use of array but is not recommended
let mixedArr = [12, 'Asus', null, undefined, {}];

console.log(grades);
console.log(computerBrands);
console.log(mixedArr);

// Alternative way to write arrays
let myTasks = [
	'drink html',
	'eat javascript',
	'inhale css',
	'bake sass'
];

// Creating an array with values from variables
let city1 = 'Tokyo';
let city2 = 'Manila';
let city3 = 'Jakarta';

let cities = [city1,city2,city3];

console.log(myTasks);
console.log(cities);


// [SECTION] length property
// The .length property allows us to get and set the total number of items in an array

console.log(myTasks.length);
console.log(cities.length);

let blankArr = [];
console.log(blankArr.length);

// length property can also be used with strings.
let fullName = "Jamie Noble";
console.log(fullName.length); 

// setting the total number of items in an array
myTasks.length = myTasks.length - 1;
// myTask.length -= 1;
console.log(myTasks)

cities.length--;
console.log(cities);

// We can't do the same on strings, however.
fullName.length = fullName.length - 1;
console.log(fullName);
console.log(fullName.length);


// We can also lengthen the array by adding a number to the length of the array

let theBeatles = ['John', 'Paul', 'Ringo', 'George'];
theBeatles.length++;
console.log(theBeatles);


// [SECTION] Reading from Arrays
/*
	- Accessing array elements is one of the more common tasks that we do with an array
	- This can be done through the use of array indexes
	- Array indexes actually refer to an address/location in the device's memory and how the information is stored.
	- Example array location in memory
		Array address: 0x7ffe9472bad0
		Array[0]: 0x7ffe9472bad0
		Array[1]: 0x7ffe9472bad4
		Array[2]: 0x7ffe9472bad8
*/

console.log(grades[0]);
console.log(computerBrands[3]);

console.log(grades[20]); // returns an undefined

let lakerLegends = ['Kobe', 'Shaq', 'LeBron', 'Magic', 'Kareem'];
// Accessing the second item in the array:
console.log(lakerLegends[1]) // Shaq
// Accessing the fourth item in the array:
console.log(lakerLegends[3]); // Magic

// You can also save/store array items in another variable
let currentLaker = lakerLegends[2];
console.log(currentLaker); // Lebron

// You can also reassign values using the items' indices
console.log("Array before reassignment:");
console.log(lakerLegends);

lakerLegends[2] = "Pau Gasol";
console.log("Array after reassignment:");
console.log(lakerLegends);

// Accessing the last element of an array.
let bullsLegends = ["Jordan", "Pippen", "Rodman", "Rose", "Kukoc"];

let lastElementIndex = bullsLegends.length - 1;

console.log(bullsLegends[lastElementIndex]);

// You can also add it directly:
console.log(bullsLegends[bullsLegends.length - 1]);

// Add Items into an Array
	// Using indices, you can also add items into the array.

let newArr = [];
console.log(newArr[0]);

// newArr[0] is undefined because we haven't yet defined the item/data for that index, we can update the index with a new value:
newArr[0] = "Cloud Strife";
console.log(newArr);

console.log(newArr[1]);
newArr[1] = "Tifa Lockhart";
console.log(newArr);

// We can also add items at the end of the array

newArr[newArr.length] = "Barret Wallace";
console.log(newArr);


// Looping over an Array
	
	// You can use a for loop to iterate over all items in an array.

for(let index = 0; index < newArr.length; index++){

	// you can use loop counter as index to be able to show each array items in a console.log
	console.log(newArr[index]);

}

//Given an array of numbers, you can also show if the following items in the array are divisible by 5 or not. You can mix in an if-else statement in the loop:
let numArr = [5, 12, 30, 46, 40];

for(let i = 0; i < numArr.length; i++){

	if(numArr[i] % 5 === 0){
		
		console.log(numArr[i] + " is divisible by 5");

	} else {

		console.log(numArr[i] + " is not divisible by 5");

	}

}

// [SECTION] Multidimensional Arrays

/*
	- Multidimensional arrays are useful for storing complex data structures
	- A practical application of this is to help visualize/create real world objects

*/

let chessBoard = [
	['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
	['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
	['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
	['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
	['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
	['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
	['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
	['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']
];

console.log(chessBoard);

console.log(chessBoard[1][3]);
console.log("Pawn moves to: " + chessBoard[4][5]);