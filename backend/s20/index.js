// This is a single-line comment
// Comments are parts of the code that gets ignored by the language
// console.log("Hello World!");
/*
	There are two types of comments:
		1. The single-line comment denoted by two slashes
		2. The multi-line comment denoted by a slash and asterisk
*/

// [SECTION] Variables

	// It is used to contain data.
	// Any information that is used by an application is stored in what we  call a "memory".

	// Declaring variables:
		//  tells our devices that a variable name is created an is ready to store data.
		// Default value is "undefined" if we don't add values to it.

		// Syntax
			// let/const variableName;

	let myVariable;

	console.log(myVariable);

	let hello;

	console.log(hello);

	// let hello;

	/*
	Guides in writing variables:
		1. Use the 'let' keyword followed by the variable name of your choosing and use the assignment operator (=) to assign a value.
		2. Variable names should start with a lowercase character, use camelCase for multiple words.
		3. For constant variables, use the 'const' keyword.
		4. Variable names should be indicative (or descriptive) of the value being stored to avoid confusion.

	Best practices in naming variables:

		1. When naming variables, it is important to create variables that are descriptive and indicative of the data it contains.

			let firstName = "Michael"; - good variable name
			let pokemon = 25000; - bad variable name

		2. When naming variables, it is better to start with a lowercase letter. We usually avoid creating variable names that starts with capital letters. Because there are several keywords in JS that start in capital letter.

			let FirstName = "Michael"; - bad variable name
			let firstName = "Michael"; - good variable name

		3. Do not add spaces to your variable names. Use camelCase for multiple words, or underscores.

			let first name = "Mike";

		camelCase is when we have first word in small caps and the next word added without space but is capitalized:

			lastName emailAddress mobileNumber

		Underscores (snake case) sample:
		
		let product_description = "lorem ipsum"
		let product_id = "250000ea1000"

	*/

	// Declairing and Initializing Variables
	// Syntax:
		// let/const variableName = value;

	let productName = 'desktop computer';
	console.log(productName);

	let productPrice = 18999;
	console.log(productPrice);

	const interest = 3.539;

	// Reassining variable values
		// Reassigning variable means changing it's initial or previous value into another value
		// Syntax:
			// variableName = newValue;

	productName = 'Laptop';
	console.log(productName);

	// let variable cannot be re-declared within its scope. So this will work:
	let friend = 'Kate';
	friend = 'Jane'

	// this will return an error:
	// let friend = 'Kate';
	
	// We cannot update or redeclare constants
	// interest = 4.489;

	/*
		When to use JavaScript const?
			As a general rule, always declare a variable with const unless you know that the value will change.

			Use const when you declare:

				-A new Array
				-A new Object
				-A new Function

	*/

	// Reassinining vs initializing variables
	
	// Declaring a variable first
	let supplier;

	supplier = "John Smith Tradings";
	console.log(supplier);

	supplier = "Zuitt Store";
	console.log(supplier);

	// const pi;


// [SECTION] Data Types

	// Strings
		// Strings are series of characters that create a word, a phrase, a sentence or anything related to creating text.
		// It can be written using either a single or double quote

	let country = 'Philippines';
	let province = "Metro Manila";

	// Concatenating strings
	let fullAddress = province + ', ' + country;
	console.log(fullAddress);

	let greeting = 'I live in the ' + country;
	console.log(greeting);


	// The escape character (\) in strings in combination with other characters can produce different effects.
	// "\n"  refers to creating a new line in between text

	let mailAddress = 'Metro Manila\n\nPhilippines';
	console.log(mailAddress);

	// Using double quotes along with the single qoutes can allow us to easily include single quotes in text without using the escape character.

	let message = "John's employees went home early";
	console.log(message);

	message = 'John\'s employees went home early';
	console.log(message);

	// Numbers

		// Integers/Whole Numbers
		let headcount = 26;
		console.log(headcount);

		// Decimal Numbers/Fractions
		let grade = 98.7;
		console.log(grade);

		// Exponential Notation
		let planetDistance = 2e10;
		console.log(planetDistance);

		// Combine strings and numbers
		console.log("John's grade last quarter is " + grade);


	// Boolean
		// Boolean values are normally used to store value relating to the state of certain things.
		// This will be useful in further discussions about creating logic to make our application respond to certain scenarios
		let isMarried = false;
		let isGoodConduct = true;
		console.log("isMarried: " + isMarried);
		console.log("isGoodConduct: " + isGoodConduct);

	// Array
		// Array are a special kind of data type that's used to store multiple values

		// similar data types
		let grades = [98.7, 92.1, 90.2, 94.6];
		console.log(grades);

		// different data types
		let details = ["John", "Smith", 32, true];
		console.log(details);

	// Objects
		// Objects are another special kind of data type that's used to mimic real world object/item
		// They are used to create complex data that contains pieces of information that are relevant to each other
		// Syntax:
			// let/const objectName = {
			// 		propertyA: value,
			// 		propertB: value,
			// }

		let person = {

			fullName: "Juan Dela Cruz",
			age: 35,
			isMarried: false,
			contact: ["+63917 123 4567", "8123 4567"],
			address: {
				houseNumber: '345',
				city: 'Manila'
			}

		}

		console.log(person);

		// They are also useful for creating abstract objects
		let myGrades = {
			firstGrading: 98.7,
			secondGrading: 92.1,
			thirdGrading: 90.2,
			fourthGrading: 94.6
		}

		console.log(myGrades);

		// typeof operator is used to determine the data type of a variable
		console.log(typeof myGrades);

		// Arrays are special type of objects.
		console.log(typeof grades);


		// Null
			// It is used or intentionally express the absence of a value in a variable

		let spouse = null;
		console.log(spouse);

		// Undefined
			// Represents the state of a variable that has been declared but without an assigned value
		let fullName;
		console.log(fullName);