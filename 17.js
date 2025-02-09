// ====================
// 7.5 JSON and AJAX
// ====================

// JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
// AJAX (Asynchronous JavaScript and XML) is a technique for making HTTP requests to a server from a web page without reloading the entire page. AJAX is used for transferring data like JSON.

// --------------------
// 1. JSON
// --------------------
// JSON is a format for structured data. It consists of key-value pairs similar to JavaScript objects but uses a specific string format.
// JSON data types include: strings, numbers, boolean values, null, objects, and arrays.

// Example: JSON format
// {
// "name": "John Doe",
// "age": 30,
// "isStudent": false,
// "address": {
// "city": "New York",
// "country": "USA"
// },
// "courses":["math", "science"]
// }

// --------------------
// 2. JSON.stringify() and JSON.parse()
// --------------------
// JSON provides methods to:
// - JSON.stringify(): Convert a JavaScript object to a JSON string.
// - JSON.parse(): Convert a JSON string to a JavaScript object.

// Example:
let person = {
    name: "John Doe",
    age: 30,
    occupation: "Developer",
    };
    let jsonString = JSON.stringify(person);
    console.log(jsonString); // Output: {"name":"John Doe","age":30,"occupation":"Developer"} (as a string)
    let parsedPerson = JSON.parse(jsonString);
    console.log(parsedPerson); // Output: {name: 'John Doe', age: 30, occupation: 'Developer'} (as a Javascript Object)
    
    // --------------------
    // 3. AJAX
    // --------------------
    // AJAX uses XMLHttpRequest or fetch to make asynchronous HTTP requests to a server and then updates the UI based on the server response.
    
    // Example: Using XMLHttpRequest (older)
    // function fetchData(url) {
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", url);
    // xhr.onload = function () {
    // if (xhr.status === 200) {
    // const data = JSON.parse(xhr.responseText);
    // console.log(data);
    // } else {
    // console.error("Request failed with status:", xhr.status);
    // }
    // };
    // xhr.onerror = function() {
    // console.log("Error in request")
    // }
    // xhr.send();
    // }
    // fetchData("https://jsonplaceholder.typicode.com/todos/1");
    
    // --------------------
    // 4. Using Fetch API (Modern)
    // --------------------
    // fetch API is a modern way to make HTTP requests.
    // It is a promise-based API, making it easier to work with asynchronous operations.
    
    // Example:
    function fetchData(url) {
    fetch(url)
    .then(function (response) {
    if (!response.ok) {
    throw new Error(HTTP error! status: ${response.status});
    }
    return response.json(); // Parse response to json
    })
    .then(function (data) {
    console.log(data);
    })
    .catch(function (error) {
    console.error("Error:", error);
    });
    }
    fetchData("https://jsonplaceholder.typicode.com/todos/1");
    
    // Example: Using Fetch API with async/await
    async function fetchDataAsync(url) {
    try{
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error(HTTP error! status: ${response.status});
    }
    const data = await response.json()
    console.log(data);
    } catch(error){
    console.error("Error", error)
    }
    }
    fetchDataAsync("https://jsonplaceholder.typicode.com/todos/1");
    
    // --------------------
    // Key Takeaways for Students
    // --------------------
    // - JSON is a standard format for structured data exchange.
    // - JSON.stringify() converts a JavaScript object to a JSON string.
    // - JSON.parse() converts a JSON string to a JavaScript object.
    // - AJAX enables asynchronous communication between web pages and servers.
    // - Use fetch or XMLHttpRequest to make HTTP requests.
    // - Handle asynchronous HTTP requests using promises and async/await.
    
    // ====================
    // Summary
    // ====================
    // JSON and AJAX are fundamental technologies for developing dynamic web applications. By using JSON for structured data exchange and AJAX for asynchronous communication, you can create seamless user experiences. Practice serializing and parsing JSON data, and making HTTP requests using the fetch API to build expertise in modern web development.