console.log("Hello World!");

// [SECTION] Functions
	// Functions in JavaScript are lines/blocks of codes that tell our device/application to perform a certain task when called/invoked.

// Function declarations
	// It defines a function with the specified parameters.

	// Syntax:
	/*
		function functionName() {
			code block (statement)
		}
	*/
	// function keyword - used to defined a javascript functions
	// functionName - the function name. Functions are named to be able to use later in the code.
	// function block ({}) - the statements which comprise the body of the function. This is where the code to be executed.
	
	function printName(){
		console.log("My name is John");
	};

//[ SECTION ] Function Invocation
	//The code block and statements inside a function is not immediately executed when the function is defined. The code block and statements inside a function is executed when the function is invoked or called.
	//It is common to use the term "call a function" instead of "invoke a function".

		//Let's invoke/call the functions that we declared.
		printName();

		//declaredFunction(); - results in an error, much like variables, we cannot invoke a function we have yet to define. 

// [SECTION] Function Declaration vs Expression
	
	// Function Declarations

		//A function can be created through function declaration by using the function keyword and adding a function name.

		//Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
		
		//declaredFunction(); //declared functions can be hoisted. As long as the function has been defined.

		//Note: Hoisting is Javascript's behavior for certain variables and functions to run or use them before their declaration.


	declaredFunction();

	function declaredFunction() {
		console.log("Hello World from declaredFunction()");
	};

	declaredFunction();

	// Function Expression

		//A function can also be stored in a variable. This is called a function expression.

		//A function expression is an anonymous function assigned to the variableFunction

		//Anonymous function - a function without a name.

		//variableFunction();
		/* 
			error - function expressions, being stored 
			in a let or const variable, cannot be hoisted.
		*/

	// variableFunction();

	let variableFunction = function() {
		console.log("Hello Again!");
	};

	variableFunction();

		//A function expression of a function named func_name assigned to the variable funcExpression
		//How do we invoke the function expression?
		//They are always invoked (called) using the variable name.


		// With named functions
	let funcExpression = function funcName() {
		console.log("Hello From The Other Side.");
	};

	funcExpression();
	// funcName();

	// Reassigning declared functions and function expressions

	declaredFunction = function() {
		console.log("updated declaredFunction");
	};

	declaredFunction();

	funcExpression = function() {
		console.log("updated funcExpression");
	};

	funcExpression();

	// const function expressions

	const constantFunc = function(){
		console.log("Initialized with const!");
	};

	constantFunc();

	// constantFunc = function() {
	// 	console.log("Cannot be re-assigned");
	// };

	// constantFunc();

// [SECTION] Function Scoping

	/*
		Scope is the accessiblity (visibility) of variable.

		3 types:
			1. local/block scope
			2. global scope
			3. function scope
	*/

	// local/block scoped variables
	{
		let localVar = "Armando Perez";
		console.log(localVar);
	}

	// global scoped variables
	let globalVar = "Mr. Worldwide";

	console.log(globalVar);

	function showNames() {

		// Function scoped variables
		var functionVar = "Joe";
		const functionConst = "John";
		let functionLet = "Jane";
		let globalVar = "New value";

		console.log(functionVar);
		console.log(functionConst);
		console.log(functionLet);
		console.log(globalVar);
	};


	showNames();

	// results to an error
	// console.log(functionVar);
	// console.log(functionConst);
	// console.log(functionLet);

// [SECTION] Nested Functions
	//You can create another function inside a function. This is called a nested function. This nested function, being inside the myNewFunction will have access to the variable, name, as they are within the same scope/code block.


	function myNewFunction() {
		let name = "Jane";

		function nestedFunction() {
			let nestedName = "John";
			console.log(name);
		};

		// console.log(nestedName); //this will cause an error.
		//nestedName variable, being declared in the nestedFunction cannot be accessed outside of the function it was declared in.
		nestedFunction();
	};

	myNewFunction();
	// nestedFunction(); // this will cause an error.

	// Function and Global Scope Variables
	// Moreover, since this function is declared inside myNewFunction, it too cannot be invoked outside of the function it was declared in.

	// Global scoped variable
	let globalName = "Alexandro";

	function myNewFunction2() {
		let nameInside = "Renze";

			//Variables declared Globally (outside any function) have Global scope.
			//Global variables can be accessed from anywhere in a Javascript 
			//program including from inside a function.
		
		// return nameInside;
		console.log(globalName);

	};

	let returnValue = myNewFunction2();
	console.log(returnValue);


// [SECTION] Function Naming Conventions

	// Functions names should be definitive of the task it will perform.
	// It usually contains a verb.

	function getCourses(){
		let courses = ["Science 101", "Math 101", "Engish 101"];

		return courses;
	};

	console.log(getCourses());

	// Avoid generic names to avoid confusion within your code.

	function get(){
		let name = "Jamie";

		return name;
	};

	console.log(get());

	// Avoid poitless and inapproriate function names.

	function foo() {

		return 25 % 5;
	}

	console.log(foo());

	// Name your function in small caps. Follow camelCase when naming variables and functions.

	function displayCarInfo() {

		console.log("Brand: Toyota");
		console.log("Type: Sedan");
		console.log("Price: 1,500,000");

	}

	displayCarInfo();

// [SECTION] Using alert() and prompt()

	// Alert function alert()
	// alert() allows us to show a small window at the top of our browser page to show information to our users.

	alert("Hello World!"); // This will run immediately when the page loads.

	function showSampleAlert(){
		alert("Hello, User!");
	};

	showSampleAlert();

	console.log("I will only log in the console when the alert is dismissed.");

	// Prompt prompt()
	// prompt() allows us to show a small window at the top of the browser to gather user input.

	let samplePrompt = prompt("Enter your Name.");

	console.log("Hello, " + samplePrompt);

	let sampleNullPrompt = prompt("Don't enter anything");

	console.log(sampleNullPrompt);


	function printWelcomeMessage() {
		let firstName = prompt("Enter Your First Name.");
		let lastName = prompt("Enter Your Last Name.");

		console.log("Hello, " + firstName + " " + lastName + "!");
		console.log("Welcome to my page!");
	};

	printWelcomeMessage();

