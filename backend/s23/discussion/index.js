console.log("Hello world!");

//[SECTION] Functions Parameters

	// Using Prompt to gather user input

	function printInput(){
		let nickname = prompt("Enter your nickname:");

		console.log("Hi, " + nickname);
	}

	// printInput();


	// Using Parameters

	function printName(name){

		console.log("My name is " + name);
	}

	printName("Juana");

	printName("John");

	printName("Jane");

	let sampleVariable = "Yui";

	printName(sampleVariable);


	// A function that checks for number's divisibility.

	function checkDivisibilityBy8(num){
		let remainder = num % 8;
		console.log("The remainder of " + num + " divided by 8 is: " + remainder);

		let isDivisibleBy8 = remainder === 0;
		console.log("Is " + num + " divisible by 8?");
		console.log(isDivisibleBy8);
		return isDivisibleBy8;
	}

	checkDivisibilityBy8(64);
	checkDivisibilityBy8(28);
	let is12DivisibleBy8 = checkDivisibilityBy8(12);
	console.log(is12DivisibleBy8);


// [SECTION] Function as Arguments

	// Function parameters can also accept other functions as arguments
	// Some comple functions use other functions as arguments to perform more complicated results.

	function argumentFunction(){
		console.log("This function was passed as an argument before the message was printed.")
	}

	function invokeFunction(argFunction){
		argFunction();
	}

	invokeFunction(argumentFunction);
	invokeFunction(printName);


	console.log(argumentFunction);

// [SECTION] Multiple Parameters

	// Multiple "arguments" will correspond to the number of "parameters" declaired in a function in succeeding order.

	function createFullName(firstName, middleName, lastName){

		return firstName + " " + middleName + " " + lastName;
	}

	let fullName = createFullName("Juan", "Dela", "Cruz");
	console.log(fullName);

	// This will not cause an error.
	console.log(createFullName("Juan", "Dela"));
	console.log(createFullName("Juan", "Dela", "Cruz", "Hello"));

	// Using variables as arguments
	let firstName = "John";
	let middleName = "Doe";
	let lastName = "Smith";

	console.log(createFullName(firstName, middleName, lastName));

	// The order of the argument is the same to the order of the parameters.
	// Parameters are just names to refer to the argument. Even if we change the name of the parameters, the arguments will received in the same order it was passed.

	function printFullName(middleName, firstName, lastName){

		return firstName + " " + middleName + " " + lastName;
	}

	console.log(printFullName("Juan", "Dela", "Cruz"));