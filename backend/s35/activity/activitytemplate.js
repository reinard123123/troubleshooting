// S34 - MongoDB CRUD Operations Activity Template:

/*

    Sample solution:

    async function addOneQuery(db) {
        await (

            //add query here

            db.collectionName.insertOne({
                field1: "value1",
                field2: "value2"
            }) //DO NOT ADD SEMICOLON.
        
        );
        
        return(db);
    }

Note: 
    - Do note change the functionName or modify the exports
    - Do not add semicolon after query
    

*/

// 1. Insert a single room (insertOne method) in the rooms collection:

async function addOneFunc(db) {

    await (

        // Add query here

    );


   return(db);

};


// 2. Insert multiple rooms (insertMany method)  in the rooms collection

async function addManyFunc(db) {

    await (

        // Add query here

    );

   return(db);

};

// 3. Use the findOne method to search for a room with the name double.
async function findRoom(db) {
    return await (

        // Add query here

    );
};

// 4. Use the updateOne method to update the queen room and set the available rooms to 0.

function updateOneFunc(db) {

   // Add query here

};


// 5. Use the deleteMany method to delete all rooms that have 0 rooms available.
function deleteManyFunc(db) {

   // Add query here

};


// 6. Find users with letter s or d in room's name.
async function findName(db) {
    return await(

            // Add query here

        );

};




// 7. Find rooms who accommodates more than 2, with price of less than or equal to 7000.
async function findAccom(db) {
    return await (

            // Add query here

        );

};




// 8. Find rooms with the letter d in their name and has price of greater than or equal to 2000.
async function findNamePrice(db) {
    return await (

            // Add query here

        );
};



try{
    module.exports = {
        addOneFunc,
        addManyFunc,
        updateOneFunc,
        deleteManyFunc,
        findRoom,
        findName,
        findAccom,
        findNamePrice
    };
} catch(err){

};

