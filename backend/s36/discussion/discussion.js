//[SECION] MongoDB Aggregation
/*
	- Used to generate manipulated data to perform operations to create filtered results that helps in analyzing data
*/

// Using he aggregate method
/*
	- The "$match" is used o pass he documents that meet the specified condition(s) to the next pipeline stage/aggregation process

	Syntax:
		{ $match: {field: value}}

	- The "$group" is used to group elements together and field-value pairs using the data from the grouped elements
	Synax:
		{ $group: { _id: "value", fieldResult: "valueResult"}}

	- Syntax for aggregate method:
		db.collectionName.aggregate([
		{ $match: {field:value}},
		{ $group: { _}}
		])
*/

db.fruits.aggregate([
	{ $match: { onSale: true } },
	{ $group { _id: "$supplier_id", total: { $sum: "$stock"} } }
	])


db.fruits.aggregate([
	{ $match: { onSale: true } },
	{ $group: { _id: "$supplier_id", total: { $sum: "$stock" } } }
])

// Field projecion wih aggregation
/*
	- The "$project" can be used to include/exclude fields from the returned results

	Syntax:
		{ $project: { field: 1/0 } }

*/

db.fruits.aggregate([
	{ $match: { onSale: true } },
	{ $group: { _id: "$supplier_id", total: { $sum: "$stock" } } },
	{ $project: { _id:0 } }
])

// Sorting aggregated result
/*
	- The "$sort" can be used to change the order of aggregaed result
	- Providing a value of -1 will sort he aggregated resuls in a reverse order

	Syntax:
		{ $sort: { field: 1/-1 } }

*/


db.fruits.aggregate([
	{ $match: { onSale: true } }, //match phase
	{ $group: { _id: "$supplier_id", total: { $sum: "$stock" } } }, //group phase
	{ $sort: { total: -1 } } // sort phase
])


// Aggregating results based on array fields
/*
	- The "$unwind" deconstructs an array field from a collection/field with an array value to output a result for each element
	Syntax:


	- This will return results creating SEPARATE DOCUMENTS for each of he countries per "origin" field
*/


db.fruits.aggregate([
	{ $unwind: "$origin" }
	])

// Display fruit documents by their origin and the kinds of fruits that are supplied

db.fruits.aggregate([
	{ $unwind: "$origin" },
	{ $group: { _id: "$origin", kinds: { $sum: 1 } } }
])


