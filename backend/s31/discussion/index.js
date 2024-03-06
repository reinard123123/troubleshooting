console.log("Hello World!");

// ES6 UPDATES!

// [Section] Exponent Operator
const firstNum = 8 ** 2;
console.log(firstNum);

const secondNum = Math.pow(8, 2);
console.log(secondNum);

// [Section] Template Literal
/*
	- Allows to write strings without using the concatenation operation (+)
	- Greatly helps with code readability
*/

let name = "John";

// Pre-Template Literal String
let message = "Hello " + name + "! Welcome to programming!";
console.log("Message without template literals: " + message);

// Strings Using Template Literal
// Uses backticks (``)
message = `Hello ${name}! Welcome to programming!`;
console.log(`Message with template literals: ${message}`);

// Multi-line Using Template Literals
const anotherMessage = `
${name} attended a math competition.
He won it by solving the problem 8 ** 2 with the solution of ${firstNum}.
`

console.log(anotherMessage);

/*
	- Template literals allow us to write strings with embedded JavaScript expressions
*/

const interestRate = 0.1;
const principal = 1000;

console.log(`The interest on your savings account is: ${principal * interestRate}`);


// [Section] Array Destructuring
/*
	- Allows to unpack elements in arrays into distinct variables
*/

const fullName = ["Juan", "Dela", "Cruz"];

// Pre-Array Destructuring
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! It's nice to meet you.`);


// Array Destructuring
const [firstName, middleName, lastName] = fullName;

console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log(`Hello ${firstName} ${middleName} ${lastName}! It's nice to meet you.`);


// [Section] Object Destructuring
/*
	- Allows to unpack properties of objects intro distinct variables
*/

const person = {
	givenName: "Jane",
	maidenName: "Dela",
	familyName: "Cruz"
}

// Pre-Object Destructuring
console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName);

console.log(`Hello ${person.givenName} ${person.maidenName} ${person.familyName}! It's nice to meet you.`);

// Object Destructuring
const {givenName, maidenName, familyName} = person;

console.log(givenName);
console.log(maidenName);
console.log(familyName);

console.log(`Hello ${givenName} ${maidenName} ${familyName}! It's nice to meet you.`);


// Example with functions
function getFullName({ givenName, maidenName, familyName }){

	console.log(`${ givenName } ${ maidenName } ${ familyName }`);
} 

getFullName(person);


// [Section] Arrow Function
/*
	- Compact alternative syntax to traditional functions
*/

const hello = () => {

	console.log("Hello World!");
}

hello();

// Arrow function
/*
	- Syntax
		let/const variableName = (parameterA, parameterB, parameterC) => {
			
			statement/code block
		}
*/

const printFullName = (firstName, middleName, lastName) => {

	console.log(`${firstName} ${middleName} ${lastName}`);
} 

printFullName("John", "D", "Smith");

// Arrow Functions with Loops
let students = ["John", "Jane", "Judy"];


// Pre-Arrow Function
students.forEach(function(student){
	console.log(`${student} is a student.`);
})

// Arrow Function
students.forEach((student) => {
	console.log(`${student} is a student.`);
})


// [Section] Implicit Return Statement
/*
	- There are instances when you can omit the "return" statement
	- This works because even without the "return" statement JavaScript implicitly add it for the return of the function.
*/
// Pre-Arrow Function
// const add = function(x, y){
// 	return x + y;
// }

// let total = add(1,2);
// console.log(total);

// Arrow Function
const add = (x, y) => x + y;

let total = add(2,3);
console.log(total);


// [Section] Default Function Argument Value
// Provides a default argument value if non is provided when the function is invoked

const greet = (name = 'User') => {
	return `Good morning, ${ name }!`;
}

console.log(greet());
console.log(greet("John"));


// [Section] Class-Based Object Blueprints
/*
	- Allows  creating/instantiation of objects using classes as blueprints
*/

class Car {

	constructor(brand, name, year){
		this.brand = brand;
		this.name = name;
		this.year = year;
	}

}

// Instantiating an object
const myCar = new Car("Ford", "Ranger Raptor", 2021);
console.log(myCar);


// [Section] ES14 (2023) updates

// toSorted()

let array = [2,4,3,5,1];

// should be able to return a new sorted array
// This allows us to sort an array without updating the original array
let sortedArray = array.toSorted();

console.log("Orginal Array: ", array);
console.log("Sorted New Array: ", sortedArray);

array.sort();
console.log("Orginal Array: ", array);



// toReversed();

let players = ["Micheal Jordan", "Kobe Bryant", "LeBron James"];

let reversedArray = players.toReversed();

console.log("Orginal Array: ", players);
console.log("Reversed New Array: ", reversedArray);

players.reverse();
console.log("Orginal Array: ", players);


// findLast()

let arrayNumbers = [15, 2, 8, 6, 24, 23];

// findLast() allows us to find the last match of the condition

let lastEvenNumber = arrayNumbers.findLast((number) => {
	console.log(number);

	return number % 2 === 0;
});

console.log(lastEvenNumber); // should be equal to 24


// using find() method
let firstEvenNumber = arrayNumbers.find((number) => {
	console.log(number);

	return number % 2 === 0;
})

console.log(firstEvenNumber) // should be equal to 2


// toSpliced()

let songsList = ["Uhaw", "Ddu Ddu Ddu", "Raining In Manila", "Ere", "Jopay"];

let updatedSongsList = songsList.toSpliced(2, 1, "Buloy");

console.log("Original Array: ", songsList);
console.log("Updated Array: ", updatedSongsList);

songsList.splice(2, 1, "Binhi");
console.log("Original Array: ", songsList);


// with()

/*
	- It allows us to create an updated new array from the original array by adding or removing elements.
	Syntax:
		array.with(index, value);

			- index is the index of the element to be added or removed
			- value is the value to be added or removed.
*/

let team7 = ["Naruto", "Sasuke", "Sakura", "Kakashi"];
let updatedTeam7 = team7.with(1, "Sai");


console.log("Original Array:", team7);
console.log("Updated Array:", updatedTeam7);