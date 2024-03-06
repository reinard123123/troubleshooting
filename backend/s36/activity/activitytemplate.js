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

		);
};


// 2. Use the count operator to count the total number of fruits with stock more than or equal 20
async function fruitsInStock(db) {
	return await(

			// Add query here

		);
};


// 3. Use the average operator to get the average price of fruits onSale per supplier
async function fruitsAvePrice(db) {
	return await(

			// Add query here

		);
};


// 4. Use the max operator to get the highest price of a fruit per supplier
async function fruitsHighPrice(db) {
	return await(

			// Add query here

		);
};



// 5. Use the min operator to get the lowest price of a fruit per supplier
async function fruitsLowPrice(db) {
	return await(

			// Add query here

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
