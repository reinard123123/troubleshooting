// S36 - Aggregation in MongoDB and Query Case Studies:

/*

    Sample solution:

    return async function addOneQuery(db) {
        await (db.collectionName.aggregate([
	      { $match: { fieldA, valueA } },
	      { $group: { _id: "$fieldB" }, { result: { operation } } }
    ]));
        
    }

Note: 
	- Do note change the functionName or modify the exports
	- Delete all the comments before pushing.

*/


// 1. Use the count operator to count the total number of fruits on sale
async function fruitsOnSale(db) {
	return await(

			// Add query here
            db.fruits.aggregate([
                { $match: { onSale: true } },
                { $count: "fruitsOnSale" }
            ])
		);
};


// 2. Use the count operator to count the total number of fruits with stock more than 20
async function fruitsInStock(db) {
	return await(

			// Add query here
            db.fruits.aggregate([
                { $match: { stock: { $gte: 20 } } },
                { $count: "enoughStock" }
            ])

		);
};


// 3. Use the average operator to get the average price of fruits onSale per supplier
async function fruitsAvePrice(db) {
	return await(

			// Add query here
            db.fruits.aggregate([
                { $match: { onSale: true } },
                { $group: { _id: "$supplier_id", avg_price: { $avg: "$price" } } },
                {$sort: {avg_price: -1}}
            ])

		);
};


// 4. Use the max operator to get the highest price of a fruit per supplier
async function fruitsHighPrice(db) {
	return await(

			// Add query here
            db.fruits.aggregate([
                { $match: { onSale: true } },
                { $group: { _id: "$supplier_id", max_price: { $max: "$price" } } },
                {$sort: {max_price: -1}}
            ])

		);
};



// 5. Use the min operator to get the lowest price of a fruit per supplier
async function fruitsLowPrice(db) {
	return await(

			// Add query here
            db.fruits.aggregate([
                { $group: { _id: "$supplier_id", min_price: { $min: "$price" } } },
                {$sort: {min_price: -1}}
            ])

		);
}


try{
    module.exports = {
        fruitsOnSale,
        fruitsInStock,
        fruitsAvePrice,
        fruitsHighPrice,
        fruitsLowPrice
    };
} catch(err){

};
