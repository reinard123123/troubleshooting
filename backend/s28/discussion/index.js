console.log("Hello World!");

// Array Methods
	
	// Mutator Methods
	/*
		- Mutator methods are functions that "mutate" or change an array they're created
	*/
	
	let fruits = ['Apple', 'Orange', 'Kiwi', 'Dragod Fruit'];

	// push()

		// - adds an element at the end of an array and returns the array's length

	console.log("Current Array:");
	console.log(fruits);

	let fruitsLength = fruits.push('Mango');
	console.log(fruitsLength);
	console.log("Mutated array from push method:");
	console.log(fruits);

	// Adding multiple elements to an array
	fruits.push('Avocado', 'Guava');
	console.log("Mutated array from push method:");
	console.log(fruits);

	// Let's try in a function
	function addFruit(fruit){
		// push the parameter to the array
		fruits.push(fruit);
	}

	addFruit("Pineapple");
	console.log("Mutated array from push method:");
	console.log(fruits);


	// pop()

		// - Removes the last element in an array AND returns the removed element
		// Syntax
			// arrayName.pop()

	let removedFruit = fruits.pop();
	console.log(removedFruit);
	console.log("Mutated array from pop method:");
	console.log(fruits);

	// Let's try in a function
	function removeFruit(){
		fruits.pop()
	}

	removeFruit();
	console.log(fruits);


	// unshift()
		// - Adds one or more elements at the beginning of an array
		/*
			Syntax:
				arrayName.unshift("elementA");
				arrayName.unshift("elementA", "elementB");
		*/

	fruits.unshift('Lime', 'Banana');
	console.log("Mutated array from unshift method:");
	console.log(fruits);

	// Let's try in a function
	function unshiftFruit(fruit){
		fruits.unshift(fruit);
	}

	unshiftFruit('Calamansi');
	console.log(fruits);


	// shift()
		// - Removes an element at the beginning of an array AND returns the removed element
		/*
			Syntax:
				arrayName.shift();
		*/

	let anotherFruit = fruits.shift();
	console.log(anotherFruit);
	console.log("Mutated array from shift method:");
	console.log(fruits);

	// Let's try in a function
	function shiftFruit(){
		fruits.shift();
	}

	shiftFruit();
	console.log(fruits);


	// splice()
		// - Simultaneousy removes elements from a specified index number AND adds elements
		/*
			Syntax:
				arrayName.splice(startingIndex, deleteCount, elementsToBeAdded)
			
		*/

	fruits.splice(1, 2, 'Lime', 'Cherry');
	console.log("Mutated array from splice method:");
	console.log(fruits);

	fruits.splice(5, 1, 'Grapes', 'Strawberry');
	console.log("Mutated array from splice method:");
	console.log(fruits);


	// sort()
		// - Rearrange the array in alphaneumeric order
		/*
			Syntax:
				arrayName.sort();
		*/

	fruits.sort();
	console.log("Mutated array from sort method:");
	console.log(fruits);


	// reverse()
		// - Reverses the order of the array elements
		/*
			Syntax:
				arrayName.reverse();
		*/

	fruits.reverse();
	console.log("Mutated array from reverse method:");
	console.log(fruits);