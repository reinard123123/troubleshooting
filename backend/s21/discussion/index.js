console.log("Hello World!");

// [SECTION] Arithmetic Operators

	let x = 1397;
	let y = 7831;

	let sum = x + y;
	console.log("Result of addition operator: " + sum);

	let difference = x - y;
	console.log("Result of subtraction operator: " + difference);

	let product = x * y;
	console.log("Result of multiplication operator: " + product);

	let quotient = x / y;
	console.log("Result of division operator: " + quotient);

	let remainder = y % x;
	console.log("Result of modulo operator: " + remainder);

// [SECTION] Assignment Operators

	// Basic Assignment Operator (=)
		// Assigns value to a variable

	let assignmentOperator = 8;

	// Addition Assignment Operator (+=)
		// This operator adds the value of the right operand to a variable and assigns the result to the variable

	assignmentOperator =  assignmentOperator + 2;
	console.log("Result of addition assignment operator: " + assignmentOperator);

		// Shorthand version
	assignmentOperator += 2;
	console.log("Result of addition assignment operator: " + assignmentOperator);

	// Subtraction/Multiplication/Division Assignment Operators(-=, *=, /=)
	assignmentOperator -= 2;
	console.log("Result of subtraction assignment operator: " + assignmentOperator);
	assignmentOperator *= 2;
	console.log("Result of multiplication assignment operator: " + assignmentOperator);
	assignmentOperator /= 2;
	console.log("Result of division assignment operator: " + assignmentOperator);

	// Multiple Operators and Parenthesis

	/*
		- When multiple operations are applied in a single statement, it follows the PEMDAS(Parenthesis, Exponents, Multiplication, Division, Addition and Subtraction) rule
	*/

	let mdas = 1 + 2 - 3 * 4 / 5;
	console.log("Result of mdas operation: " + mdas);

	// Using parentheses
	let pemdas = 1 + (2 - 3) * (4 / 5);
	console.log("Result of pemdas operation: " + pemdas);

	// Regrouping with parenthesis
	pemdas =  (1 + (2 - 3)) * (4 / 5);
	console.log("Result of pemdas operation: " + pemdas);

	// Increment and Decrement
		// Operators that add or subtract values by 1 and reassign the value of the variable where the increment/decrement was applied to.

	let z = 1;

	// Pre-increment
	// The value of "z" is added by a value of one before returning the value and storing it in the variable "increment" 
	let increment = ++z;
	console.log("Result of pre-increment: " + increment);
	// The value of "z" was also increased even though we didn't implicitly specify any value reassignment
	console.log("Result of pre-increment: " + z);

	// Post-increment
	// The value of "z" is returned and stored in the variable "increment" then the value of "z" is increased by one 
	increment = z++;
	// The value of "z" is at 2 before it was incremented 
	console.log("Result of post-increment: " + increment);
	/* The value of "z" was increased again reassigning the value to 3 */
	console.log("Result of post-increment: " + z);

	// Pre-decrement
	// The value of "z" is decreased by a value of one before returning the value and storing it in the variable "increment" 
	let decrement = --z;
	// The value of "z" is at 3 before it was decremented 
	console.log("Result of pre-decrement: " + decrement);
	// The value of "z" was decreased reassigning the value to 2 
	console.log("Result of pre-decrement: " + z);

	// Post-decrement
	// The value of "z" is returned and stored in the variable "increment" then the value of "z" is decreased by one 
	decrement = z--;
	// The value of "z" is at 2 before it was decremented 
	console.log("Result of post-decrement: " + decrement);
	// The value of "z" was decreased reassigning the value to 1 
	console.log("Result of post-decrement: " + z);

// [SECTION] Type Coercion
/*
	- Type coercion is the automatic or implicit conversion of values from one data type to another

*/
	let numA = "10";
	let numB = 12;

	/* 
	    - Adding/concatenating a string and a number will result is a string
	    - This can be proven in the console by looking at the color of the text displayed
	    - Black text means that the output returned is a string data type
	*/
	

	// String and number -> string
	let coercion = numA + numB;
	console.log(coercion);
	console.log(typeof coercion);

	// None coercion
	/* 
        - The result is a number
        - This can be proven in the console by looking at the color of the text displayed
        - Blue text means that the output returned is a number data type
    */
	let numC = 16;
	let numD = 14;

	let nonCoercion = numC + numD;
	console.log(nonCoercion);
	console.log(typeof nonCoercion);

	// Boolean and number -> number
	/* 
        - The result is a number
        - The boolean "true" is also associated with the value of 1
    */
	let numE = true + 1;
	console.log(numE);

	/* 
        - The result is a number
        - The boolean "false" is also associated with the value of 0
    */
	let numF = false + 1;
	console.log(numF);

// [SECTION] Comparison Operator

	let juan = 'juan';

	// Equality Operator (==)
	/*
		- Checks whether the operands are equal/have the same content.
		- Attemps to CONVERT AND COMPARE operands of different data types
		- Return a boolean value
	*/

	console.log(1 == 1);
	console.log(1 == 2);
	console.log(1 == '1');
	console.log(0 == false);

	// Compares two strings that are the same
	console.log('juan' == 'juan');
	console.log('juan' == juan);

	// Inequality Operator (!=)
	/*
		- Checks whether the operands are NOT equal/have DIFFERENT content.
		- Atteps to CONVERT AND COMPARE operands of different data types.
	*/

	console.log(1 != 1);
	console.log(1 != 2);
	console.log(1 != '1');
	console.log(0 != false);

	// Compares two strings that are the same
	console.log('juan' != 'juan');
	console.log('juan' != juan);

	// Strict Equality Operator
	/*
		- Checks whether the operands are equal/have the same content and at the same time, checks if they have the same type.
	*/

	console.log(1 === 1);
	console.log(1 === 2);
	console.log(1 === '1');
	console.log(0 === false);

	// Compares two strings that are the same
	console.log('juan' === 'juan');
	console.log('juan' === juan);

	// Strict Inequality Operator
	/*
		- Checks whether the operands are NOT equal/have the DIFFERENT content and at the same time, checks if they have the same type.
	*/

	console.log(1 !== 1);
	console.log(1 !== 2);
	console.log(1 !== '1');
	console.log(0 !== false);

	// Compares two strings that are the same
	console.log('juan' !== 'juan');
	console.log('juan' !== juan);

// [SECTION] Relational Operators
	
	// Some comparison operators check whether one value is greater or less than to the other value.

	let a = 50;
	let b = 65;

	// GT or Greater Than Operator (>)
	let isGreaterThan = a > b;
	// LT or Lesser Than Operator (<)
	let isLessThan = a < b;
	// GTE or Greater Than or Equal operator (>=)
	let isGTorEqual = a >= b;
	// LTE or Less Than or Equal operator (<=)
	let isLTorEqual = a <= b;

	// Like equality operator, these will return a boolean value.
	console.log(isGreaterThan);
	console.log(isLessThan);
	console.log(isGTorEqual);
	console.log(isLTorEqual);

	let numStr = "30";
	console.log(a > numStr); // true - forced coercion to change the string to a number

	console.log(b < numStr); // false

	let str = "twenty";
	console.log(b >= str); // false

// [SECTION] Logical Operators

	let isLegalAge = true;
	let isRegistered = false;

	// Logical AND operator (&& - Double Ampersand)
	// return true if ALL operands are true.
	let allRequirementsMet = isLegalAge && isRegistered;
	console.log("Result of logical AND operator: " + allRequirementsMet);

	// Logical OR operator (|| - Double Pipe)
	// returns true if one of the operands are true
	let someRequirementsMet = isLegalAge || isRegistered;
	console.log("Result of logical OR operator: " + someRequirementsMet);

	// Logical Not Operator (! - Exclamation Point)
	let someRequirementsNotMet = !isRegistered;
	console.log("Result of logical NOT operator: " + someRequirementsNotMet);

