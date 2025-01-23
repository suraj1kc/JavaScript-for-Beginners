// ====================
// 6.9 Functions
// ====================

// Functions are reusable blocks of code that perform a specific task.
// They help organize code, avoid repetition, and make programs easier to read and maintain.
// In JavaScript, functions are first-class objects, meaning they can be:
// - Assigned to variables
// - Passed as arguments to other functions
// - Returned from other functions

// --------------------
// 1. Function Declaration
// --------------------
// A function declaration defines a named function using the `function` keyword.

// Syntax:
// function functionName(parameters) {
//   // Code to execute
//   return result; // Optional
// }

// Example:
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!

// Explanation:
// - `functionName`: The name of the function (`greet`).
// - `parameters`: Inputs to the function (`name`).
// - `return`: Specifies the value to return (optional).

// --------------------
// 2. Function Expression
// --------------------
// A function expression defines a function as part of an expression, often assigned to a variable.

// Syntax:
// const functionName = function(parameters) {
//   // Code to execute
//   return result; // Optional
// };

// Example:
const greetUser = function (name) {
  return "Hello, " + name + "!";
};

console.log(greetUser("Alice")); // Output: Hello, Alice!

// Explanation:
// - The function is anonymous (no name) and assigned to the variable `greetUser`.
// - Function expressions are useful for passing functions as arguments or assigning them dynamically.

// --------------------
// 3. Arrow Functions
// --------------------
// Arrow functions are a concise way to write functions, introduced in ES6.

// Syntax:
// const functionName = (parameters) => {
//   // Code to execute
//   return result; // Optional
// };

// Example:
const greetPerson = (name) => {
  return "Hello, " + name + "!";
};

console.log(greetPerson("Bob")); // Output: Hello, Bob!

// Shorter Syntax (for single-line functions):
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// Explanation:
// - Arrow functions are shorter and more readable.
// - If the function body is a single expression, you can omit the `return` keyword and curly braces.

// --------------------
// 4. Function Parameters and Arguments
// --------------------
// - **Parameters**: Variables listed in the function definition.
// - **Arguments**: Actual values passed to the function when it is called.

// Example:
function multiply(a, b) {
  // `a` and `b` are parameters
  return a * b;
}

console.log(multiply(4, 5)); // `4` and `5` are arguments; Output: 20

// Default Parameters:
// You can assign default values to parameters if no argument is provided.

function sayHello(name = "Guest") {
  return "Hello, " + name + "!";
}

console.log(sayHello()); // Output: Hello, Guest!
console.log(sayHello("Emily")); // Output: Hello, Emily!

// --------------------
// 5. Return Statement
// --------------------
// The `return` statement specifies the value to return from a function.
// If no `return` statement is used, the function returns `undefined`.

// Example:
function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log(checkAge(20)); // Output: Adult
console.log(checkAge(15)); // Output: Minor

// --------------------
// 6. Function Scope
// --------------------
// Variables declared inside a function are local to that function and cannot be accessed outside.

// Example:
function myFunction() {
  let message = "Hello, World!";
  console.log(message); // Output: Hello, World!
}

// console.log(message); // Error: message is not defined (outside the function scope)

// --------------------
// 7. Higher-Order Functions
// --------------------
// A higher-order function is a function that:
// - Takes one or more functions as arguments, or
// - Returns a function as its result.

// Example:
function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(operate(2, 3, add)); // Output: 5
console.log(operate(2, 3, multiply)); // Output: 6

// --------------------
// 8. Callback Functions
// --------------------
// A callback function is a function passed as an argument to another function and executed later.

// Example:
function greetUser(name, callback) {
  console.log("Hello, " + name + "!");
  callback(); // Execute the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greetUser("John", sayGoodbye);
// Output:
// Hello, John!
// Goodbye!

// --------------------
// 9. Immediately Invoked Function Expressions (IIFE)
// --------------------
// An IIFE is a function that is executed immediately after it is defined.

// Syntax:
// (function() {
//   // Code to execute
// })();

// Example:
(function () {
  console.log("This is an IIFE!"); // Output: This is an IIFE!
})();

// --------------------
// Key Takeaways for Students
// --------------------
// - Functions are reusable blocks of code that perform specific tasks.
// - Use function declarations, expressions, or arrow functions to define functions.
// - Parameters are inputs to a function, and arguments are the actual values passed.
// - The `return` statement specifies the value to return from a function.
// - Functions can be passed as arguments (callbacks) or returned from other functions (higher-order functions).

// ====================
// Summary
// ====================
// Functions are a fundamental building block of JavaScript. They allow you to write reusable, modular, and organized code. By mastering functions, you can create powerful and flexible programs. Practice defining and using functions to solve real-world problems and improve your coding skills.
