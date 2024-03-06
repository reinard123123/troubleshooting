/*
    1. Create a function named getUserInfo which is able to return an object. 

        The object returned should have the following properties:
        
        - key - data type

        - name - String
        - age -  Number
        - address - String
        - isMarried - Boolean
        - petName - String

        Note: Property names given is required and should not be changed.

        To check, create a variable to save the value returned by the function.
        Then log the variable in the console.

        You can also invoke the function in the console to view the returned value of the function.

        Note: This is optional.

*/

function getUserInfo(){

    return {

        name: "John Doe",
        age: 25,
        address: "123 Street, Quezon City",
        isMarried: false,
        petName: "Danny"

    }
}

let userInfo = getUserInfo();
console.log(userInfo);

/*
    2. Create a function named getArtistsArray which is able to return an array with at least 5 names of your favorite bands or artists.
        
        - Note: the array returned should have at least 5 elements as strings.
                function name given is required and cannot be changed.


        To check, create a variable to save the value returned by the function.
        Then log the variable in the console.

        You can also invoke the function in the console to view the returned value of the function.

        Note: This is optional.
    
*/

function getArtistsArray(){
    return ["Ben & Ben","Arthur Nery","Linkin Park","Paramore","Taylor Swift"];
}

let bandsArray = getArtistsArray();
console.log(bandsArray);


/*
    3. Create a function named getSongsArray which is able to return an array with at least 5 titles of your favorite songs.

        - Note: the array returned should have at least 5 elements as strings.
                function name given is required and cannot be changed.

        To check, create a variable to save the value returned by the function.
        Then log the variable in the console.

        You can also invoke the function in the console to view the returned value of the function.

        Note: This is optional.
*/

function getSongsArray(){
    return ["Kathang Isip","Binhi","In the End","Bring by Boring Brick","Love Story"];
}

let songsArray = getSongsArray();
console.log(songsArray);


/*
    4. Create a function named getMoviesArray which is able to return an array with at least 5 titles of your favorite movies.

        - Note: the array returned should have at least 5 elements as strings.
                function name given is required and cannot be changed.

        To check, create a variable to save the value returned by the function.
        Then log the variable in the console.

        You can also invoke the function in the console to view the returned value of the function.

        Note: This is optional.
*/

function getMoviesArray(){
    return ["The Lion King","Meet the Robinsons","Howl's Moving Castle","Tangled","Frozen"];
}

let moviesArray = getMoviesArray();
console.log(moviesArray);


/*
    5. Create a function named getPrimeNumberArray which is able to return an array with at least 5 prime numbers.

            - Note: the array returned should have numbers only.
                    function name given is required and cannot be changed.

            To check, create a variable to save the value returned by the function.
            Then log the variable in the console.

            You can also invoke the function in the console to view the returned value of the function.

            Note: This is optional.
*/


function getPrimeNumberArray(){
    return [1,3,5,7,17]
};


let primeNumberArray = getPrimeNumberArray();
console.log(primeNumberArray)



//Do not modify
//For exporting to test.js
try{
    module.exports = {

        getUserInfo: typeof getUserInfo !== 'undefined' ? getUserInfo : null,
        getArtistsArray: typeof getArtistsArray !== 'undefined' ? getArtistsArray : null,
        getSongsArray: typeof getSongsArray !== 'undefined' ? getSongsArray : null,
        getMoviesArray: typeof getMoviesArray !== 'undefined' ? getMoviesArray : null,
        getPrimeNumberArray: typeof getPrimeNumberArray !== 'undefined' ? getPrimeNumberArray : null,

    }
} catch(err){

}