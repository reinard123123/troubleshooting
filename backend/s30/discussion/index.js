// Accessing an HTML element using Javascript
// const clicker = document.getElementById('clicker');
// const clicker = document.getElementByClass('clicker');
const clicker = document.querySelector('#clicker');
// You can use 'querySelector' as a more versatile option when it comes to targeting HTML elements.

// Adding an event listener to an element. The 'addEventListener' function takes two arguments, the first one being the specific event that it will listen to, and the second one being the function that will trigger once that event is also triggered.
clicker.addEventListener('click', function() {
	console.log('The button has been clicked!');
})


// [SECTION] Reactive DOM with Fetch
fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
	return response.json() // Converts the JSON formatted data from the server into a Javascript readable data type like an object or an array.
})
.then(function(data){ // The 'data' parameter now contains the converted response from the server
	// console.log(data)
	showPosts(data);
})

const showPosts = function(posts){
	let postEntries = '';

	// Loops through each post from the server and attaches their properties to their specific HTML elements.
	posts.forEach(function(post){
		postEntries += `
            <div id="post-${post.id}">
                <h3 id="post-title-${post.id}">${post.title}</h3>
                <p id="post-body-${post.id}">${post.body}</p>
                <button onclick="editPost('${post.id}')">Edit</button>
                <button onclick="deletePost('${post.id}')">Delete</button>
            </div>
        `;
	})

	// We'll assign the postEntries variable to the div container that we created earlier to render each post in HTML format.
	document.querySelector('#div-post-entries').innerHTML = postEntries;
}

// Creating new data in the server
document.querySelector('#form-add-post').addEventListener('submit', function(event) {
	// Prevents the default behavior of browsers when submitting forms which is refreshing the entire page.
	event.preventDefault();

	let titleInput = document.querySelector('#txt-title');
	let bodyInput = document.querySelector('#txt-body');

	// You can use the 'value' property to get the actual data of the input fields.
	// console.log(titleInput.value);

	fetch('https://jsonplaceholder.typicode.com/posts', {
	    method: 'POST', //The method is reponsible for setting the type of action in a request
	    body: JSON.stringify({ // The body holds the actual data in the request
	        title: titleInput.value,
	        body: bodyInput.value,
	        userId: 1
	    }),
	    headers: { 'Content-type': 'application/json' } // The headers are just additional details/specifications about the request
	})
	.then(function(response){
	    return response.json()
	})
	.then(function(data){
	    console.log(data);
	    alert('Successfully added.');


	    //Clears the input elements upon submission
	    titleInput.value = null;
	    bodyInput.value = null;
	});
})

// Transferring the title and body to the form and editing the post
const editPost = function(id){
	let title = document.querySelector(`#post-title-${id}`).innerHTML;
	let body = document.querySelector(`#post-body-${id}`).innerHTML;

	document.querySelector('#txt-edit-id').value = id;
    document.querySelector('#txt-edit-title').value = title;
    document.querySelector('#txt-edit-body').value = body;
    document.querySelector('#btn-submit-update').removeAttribute('disabled');
}

// Updating the post when form is submitted
document.querySelector('#form-edit-post').addEventListener('submit', function(e) {
    e.preventDefault();

    //PUT is the value of method this time because the action to be done is editing/updating.
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: document.querySelector('#txt-edit-id').value,
            title: document.querySelector('#txt-edit-title').value,
            body: document.querySelector('#txt-edit-body').value,
            userId: 1
        }),
        headers: { 'Content-type': 'application/json' }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        alert('Successfully updated.');

        document.querySelector('#txt-edit-id').value = null;
        document.querySelector('#txt-edit-title').value = null;
        document.querySelector('#txt-edit-body').value = null;
        document.querySelector('#btn-submit-update').setAttribute('disabled', true);
    });
});