//fetching a dummy api
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json()) //getting a resource
  .then((json) => console.log(json))
  .catch((error) => console.log('Some error occurred', error));

//list all resources
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log('Some error occurred', error));

//creating a resource
let info = {
  'userId': 11,
  'body': 'some text',
  'title': 'this is my data'
}
let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset = utf-8'
  },
  body: JSON.stringify(info)
}
fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log('Some error occurred', error));

//updating a resource 

let change = {
  method: "PUT",
  headers: {
    'Content-Type': 'application/json; charset = utf-8'
  },
  body: JSON.stringify({
    'body': 'this text has been changed',
    'userId': '17'
  })
}
fetch('https://jsonplaceholder.typicode.com/posts/17', change)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log('Some error occurred', error));


//deleting a resource
fetch('https://jsonplaceholder.typicode.com/posts/18', {
  method: 'DELETE'
})
  .then((response) => response.json())
  .then(function (json) {
    console.log("Deleted");
  })
  .catch((error) => console.log('Some error occurred', error));

fetch('https://jsonplaceholder.typicode.com/posts/17/comments')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log('Some error occurred', error));


//fetching data from a free api
setTimeout(function () {
  fetch('https://openlibrary.org/search/authors.json?q=newt%20scamander')
    .then((response) => response.json())
    .then(function (json) {
      console.log(Object.keys(json));
      console.log(Object.values(json));
      document.getElementById('box').innerHTML = "By fetch: " + Object.keys(json) + Object.values(json);
    })
}, 2000);