// ====================
// 6.5 Data Types in JavaScript
// ====================
// JavaScript variables can hold many data types, which are broadly categorized into:
// 1. Primitive Data Types: String, Number, Boolean, Undefined, Null, BigInt, Symbol
// 2. Reference Data Types: Object, Array, Function

// ====================
// Primitive Data Types
// ====================

// String: Represents textual data
var name = "John"; // Declare a string variable
console.log(name); // Output: John
console.log(typeof name); // Output: string

// Number: Represents numeric data, including integers and floating-point numbers
var age = 25; // Declare a number variable
console.log(age); // Output: 25
console.log(typeof age); // Output: number

// Boolean: Represents a logical value, either true or false
var isStudent = true; // Declare a boolean variable
console.log(isStudent); // Output: true
console.log(typeof isStudent); // Output: boolean

// Undefined: Represents a variable that has been declared but not assigned a value
var address; // Declare a variable without assigning a value
console.log(address); // Output: undefined
console.log(typeof address); // Output: undefined

// Null: Represents the intentional absence of any object value
var car = null; // Declare a variable with a null value
console.log(car); // Output: null
console.log(typeof car); // Output: object (Note: This is a known quirk in JavaScript)

// BigInt: Represents integers larger than the maximum safe integer (2^53 - 1)
var bigNumber = 9007199254740991n; // Declare a BigInt variable
console.log(bigNumber); // Output: 9007199254740991n
console.log(typeof bigNumber); // Output: bigint

// Symbol: Represents a unique and immutable value, often used as object property keys
var id = Symbol("id"); // Declare a Symbol variable
console.log(id); // Output: Symbol(id)
console.log(typeof id); // Output: symbol

// ======================
// Reference Data Types
// ======================

// Object: Represents a collection of key-value pairs
var person = {
  firstName: "Jane", // Key: firstName, Value: "Jane"
  lastName: "Doe", // Key: lastName, Value: "Doe"
  age: 30, // Key: age, Value: 30
};
console.log(person); // Output: { firstName: 'Jane', lastName: 'Doe', age: 30 }
console.log(typeof person); // Output: object

// Array: Represents an ordered list of values
var colors = ["Red", "Green", "Blue"]; // Declare an array
console.log(colors); // Output: [ 'Red', 'Green', 'Blue' ]
console.log(typeof colors); // Output: object (Note: Arrays are a type of object in JavaScript)

// Function: Represents a block of code designed to perform a specific task
function greet() {
  console.log("Hello, World!"); // Function body
}
console.log(greet); // Output: [Function: greet]
console.log(typeof greet); // Output: function
