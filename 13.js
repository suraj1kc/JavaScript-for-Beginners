// ====================
// 7.1 Scope and Closures
// ====================

// Scope determines the accessibility of variables, functions, and objects in different parts of your code.
// It controls where a variable can be accessed or modified.
// Closures are a powerful JavaScript feature that allow an inner function to access the outer function's scope even after the outer function has finished execution.

// --------------------
// 1. Scope
// --------------------
// JavaScript has two main types of scope: global scope and local (function) scope.

// a) Global Scope:
// Variables declared outside any function have a global scope. They can be accessed and modified from anywhere in your code.

// Example:
let globalVariable = "I am global!"; // Declared in the global scope
function checkGlobal() {
  console.log(globalVariable); // Accessing a global variable inside a function
}
checkGlobal(); // Output: I am global!
console.log(globalVariable); // Accessing a global variable outside a function

// b) Local (Function) Scope:
// Variables declared inside a function have a local scope. They can only be accessed and modified within that function.

// Example:
function myFunction() {
  let localVariable = "I am local!"; // Declared in the function scope
  console.log(localVariable); // Accessing a local variable
}
myFunction(); // Output: I am local!
// console.log(localVariable); // Error: localVariable is not defined (outside of myFunction)

// c) Block Scope:
// Variables declared with let and const have block scope, meaning they are only accessible within the block (e.g., inside if statements, for loops, or {}).

// Example:
if (true) {
  let blockScoped = "I am block-scoped!";
  console.log(blockScoped); // Output: I am block-scoped!
}
// console.log(blockScoped); // Error: blockScoped is not defined

// --------------------
// 2. Closures
// --------------------
// A closure is created when an inner function attempts to access the scope of its outer function even after the outer function has completed its execution.
// The inner function "remembers" the environment in which it was created.

// Example:
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(outerVariable); // Accessing outer variable
    console.log(innerVariable); // Accessing inner variable
  };
}
let myClosure = outerFunction("Hello from outer");
myClosure("Hello from inner"); // Output: Hello from outer
// Hello from inner
// Explanation:
// - outerFunction is called with outerVariable "Hello from outer".
// - It returns innerFunction.
// - innerFunction closes over the outerFunction's scope and remembers the value of outerVariable ("Hello from outer").
// - When myClosure is called, it still has access to the outerVariable from outerFunction's scope even though outerFunction has finished executing.

// --------------------
// 3. Uses of Closures
// --------------------
// Closures are commonly used in:
// - Data encapsulation (to hide data and provide a controlled interface).
// - Creating private variables.
// - Implementing callbacks and event handlers.
// - Creating function factories (functions that return other functions).

// Example: Data Encapsulation
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}
let counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.increment();
console.log(counter.getCount()); // Output: 2
// console.log(count); // Error: count is not defined because it's inside createCounter.

// --------------------
// Key Takeaways for Students
// --------------------
// - Scope determines where variables can be accessed.
// - Global scope variables are accessible everywhere.
// - Local (function) scope variables are only accessible within the function.
// - Block scope variables (with let and const) are only accessible within their block.
// - Closures allow inner functions to remember and access their outer function's scope, even after the outer function has completed.
// - Closures are crucial for data encapsulation, private variables, and many other advanced JavaScript patterns.

// ====================
// Summary
// ====================
// Understanding scope and closures is critical for developing robust JavaScript code. Scope helps you avoid variable naming conflicts, and closures enable you to create reusable components with private variables. Practice using closures in different scenarios to build expertise in JavaScript.
