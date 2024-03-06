// CRUD OPERATIONS

// [SECTION] Inserting Documents (CREATE)

// Inserting one document
/*
	Syntax:
		db.collectionName.insertOne({object});
*/

db.users.insertOne({
	firstName: "Jane",
	lastName: "Doe",
	age: 21,
	contact: {
		phone: "87654321",
		email: "janedoe@gmail.com"
	},
	courses: [ "CSS", "Javascript", "Python" ],
	department: "none"
});

// Inserting many documents
/*
	Syntax:
		db.collectionName.insertMany([{object}, {object}, ...]);
*/

db.users.insertMany([
    {
        firstName: "Stephen",
        lastName: "Hawking",
        age: 76,
        contact: {
            phone: "87654321",
            email: "stephenhawking@gmail.com"
        },
        courses: [ "Python", "React", "PHP" ],
        department: "none"
    },
    {
        firstName: "Neil",
        lastName: "Armstrong",
        age: 82,
        contact: {
            phone: "87654321",
            email: "neilarmstrong@gmail.com"
        },
        courses: [ "React", "Laravel", "Sass" ],
        department: "none"
    }
]);


// [SECTION] Finding documents (READ)
/*
	Syntax:
		db.collectionName.findOne();
									 "condition"
		db.collectionName.findOne({ field: value });
*/

// Finding a single document
db.users.findOne();

db.users.findOne({ firstName: "Stephen" });


// Finding multiple documents
db.users.find({ department: "none" });


// [SECTION] Updating a document (Update)

// Updating single document
/*
	Syntax:
		db.collectionName.updateOne( {criteria}, {$set: {field: value}});
*/

db.users.updateOne(
	{ firstName: "Test" },
	{
		$set: {
	        firstName: "Bill",
	        lastName: "Gates",
	        age: 65,
	        contact: {
	            phone: "87654321",
	            email: "bill@gmail.com"
	        },
	        courses: [ "PHP", "Laravel", "HTML" ],
	        department: "Operations",
	        status: "active"
	    }
	}
);

db.users.findOne({ firstName: "Bill" });

// Updating multiple documents
db.users.updateMany(
	{ department: "none" },
	{
		$set: { department: "HR" }
	}
);

// [SECTION] Deleting documents (DELETE)

// Create a document to delete
db.users.insert({
	firstName: "test"
});


// Deleting a single document
/*
	Syntax:
		db.collectionName.deleteOne({criteria});
*/

db.users.deleteOne({
	firstName: "test"
});


// Deleting many
/*
	Syntax:
		db.collectionName.deleteMany({criteria});
*/

db.users.deleteMany({
	firstName: "Bill"
})

// DO NOT USE: db.users.deleteMany()


// [SECTION] Comparison Query Operators

// $gt/$gte operator
/*
	Syntax:
		db.collectionName.find({ field: { $gt: value } });
		db.collectionName.find({ field: { $gte: value } });
*/
db.users.find({ age: { $gt: 50 } });
db.users.find({ age: { $gte: 50 } });

// $lt/$lte operator
/*
	Syntax:
		db.collectionName.find({ field: { $lt: value } });
		db.collectionName.find({ field: { $lte: value } });
*/
db.users.find({ age: { $lt: 50 } });
db.users.find({ age: { $lte: 50 } });


// $ne operator
/*
	- ne = not equal

	Syntax:
		db.collectioName.find({ field: { $ne: value } });
*/

db.users.find({ age: { $ne: 82 } });


// $in operator
/*
	- Allows us to find documents with specific match criteria on field using different values.

	Syntax:
		db.collectioName.find({ field: { $in: value } });
*/

db.users.find({ lastName: { $in: ["Hawking", "Doe"] } });
db.users.find({ courses: { $in: ["HTML", "React"] } });


// [SECTION] Logical Query Operators

// $or operator
/*
	Syntax:
		db.collectionName.find({ $or: [ { fieldA: valueA}, {fieldB: valueB}, ... ] })
*/

db.users.find({ $or: [ { firstName: "Neil" }, { age: 25 } ] });
db.users.find({ $or: [ { firstName: "Stephen" }, { age: { $gt: 30 } } ] });


// $and operator
/*
	Syntax:
		db.collectionName.find({ $and: [ { fieldA: valueA}, {fieldB: valueB}, ... ] })
*/

db.users.find({ $and: [ { age: { $ne: 82 } }, { age: { $ne: 76 } } ] });


// [SECTION] Field Projections

// Inclusion
/*
	- Allow us to include/add specific fields only when retrieving documents

	Syntax:
		db.collectionName.find({ criteria }, { field: 1 });
*/

db.users.find(
	{
		firstName: "Jane"
	},
	{
		firstName: 1,
		lastName: 1,
		contact: 1
	}
);

// Exclusion
/*
	- Allows us to exlude/remove specific fields only when retrieving documents.

	Syntax:
		db.collectionName.find({ criteria }, { field: 0 });
*/

db.users.find(
	{
		firstName: "Jane"
	},
	{
		contact: 0,
		department: 0
	}
);

// Suppressing the ID field

db.users.find(
	{
		firstName: "Jane"
	},
	{
		firstName: 1,
		lastName: 1,
		contact: 1,
		_id: 0
	}
);

// [SECTION] Evaluation Query Operators

// $regex operator
/*
	- Allows us to find documents that match a specific string pattern using regular expression

	Syntax:
		db.collectionName.find({ field: $regex: "", $options: "optionValue" });
*/

// Case sensitive query
db.users.find({ firstName: { $regex: "N" } });

// Case insensitive query
db.users.find({ firstName: { $regex: "j", $options: "i" } });