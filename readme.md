# JavaScript Basics and Advanced Concepts

> A comprehensive guide covering client-side scripting basic and advanced JavaScript concepts

## Table of Contents

- [Course Overview](#course-overview)
- [Learning Objectives](#learning-objectives)
- [Unit 6: Client-Side Scripting with JavaScript](#unit-6-client-side-scripting-with-javascript)
  - [6.1 Introduction to JavaScript](#61-introduction-to-javascript)
  - [6.2 Using JS in HTML](#62-using-js-in-html)
  - [6.3 JavaScript Output](#63-javascript-output)
  - [6.4 JavaScript Comments](#64-javascript-comments)
  - [6.5 Variables and Data Types](#65-variables-and-data-types)
  - [6.6 Operators and Expressions](#66-operators-and-expressions)
  - [6.7 Control Flow and Conditionals](#67-control-flow-and-conditionals)
  - [6.8 Loops](#68-loops)
  - [6.9 Functions](#69-functions)
  - [6.10 Arrays](#610-arrays)
  - [6.11 Objects](#611-objects)
- [Unit 7: Advanced Topics on JavaScript](#unit-7-advanced-topics-on-javascript)
  - [7.1 Scope and Closures](#71-scope-and-closures)
  - [7.2 Error Handling and Debugging](#72-error-handling-and-debugging)
  - [7.3 DOM Manipulation](#73-dom-manipulation)
  - [7.4 Asynchronous JavaScript](#74-asynchronous-javascript)
  - [7.5 JSON and AJAX](#75-json-and-ajax)
  - [7.6 ES6 and Modern JavaScript](#76-es6-and-modern-javascript)
  - [7.7 JavaScript Libraries](#77-javascript-libraries)

## Course Overview

This curriculum provides a comprehensive introduction to JavaScript, covering both fundamental concepts and advanced topics. The course is structured into two units:

- **Unit 6** focuses on core JavaScript concepts and client-side scripting fundamentals (8 hours)
- **Unit 7** explores advanced JavaScript topics and modern development practices (7 hours)

## Learning Objectives

By the end of this course, students will be able to:

1. Write and execute JavaScript code in web browsers
2. Understand and implement core JavaScript concepts
3. Manipulate the DOM and handle user events
4. Work with asynchronous programming patterns
5. Debug JavaScript applications effectively
6. Use modern JavaScript features and best practices

## Unit 6: Client-Side Scripting with JavaScript

### 6.1 Introduction to JavaScript

#### What is JavaScript?

JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a dynamic language that supports object-oriented, imperative, and functional programming styles.

**Key Characteristics:**

- Client-side scripting language (but can also run server-side with Node.js)
- Dynamic typing
- First-class functions
- Object-oriented capabilities
- Event-driven programming

#### History and Evolution

- Created by Brendan Eich at Netscape in 1995
- Originally named Mocha, then LiveScript
- Standardized as ECMAScript in 1997
- Regular updates through ECMAScript specifications (ES6/ES2015 and beyond)

#### Role in Web Development

JavaScript forms one of the three core technologies of web development:

1. HTML (Structure)
2. CSS (Presentation)
3. JavaScript (Behavior)

```javascript
// Example of JavaScript's role in web interactivity
document.getElementById("myButton").addEventListener("click", function () {
  alert("Hello, World!");
  // Changes webpage content dynamically
  document.getElementById("output").innerHTML = "Button was clicked!";
});
```

### 6.2 Using JS in HTML

#### Including JavaScript in HTML Documents

There are three main ways to include JavaScript in HTML:

1. **Inline JavaScript:**

```html
<button onclick="alert('Hello!')">Click me</button>
```

2. **Internal JavaScript:**

```html
<script>
  function greet() {
    alert("Hello from internal script!");
  }
</script>
```

3. **External JavaScript:**

```html
<script src="path/to/script.js"></script>
```

#### Best Practices

1. **Script Placement:**

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Critical scripts that must load before content -->
    <script src="critical.js"></script>
  </head>
  <body>
    <!-- Content here -->

    <!-- Place scripts at bottom for better page load performance -->
    <script src="main.js"></script>
  </body>
</html>
```

2. **Loading Attributes:**

```html
<!-- Defer: Load after HTML parsing -->
<script defer src="script.js"></script>

<!-- Async: Load in parallel with HTML parsing -->
<script async src="analytics.js"></script>
```

### 6.3 JavaScript Output

#### Output Methods

1. **console.log()** - Writing to the browser console:

```javascript
console.log("Basic message");
console.log("Object:", { name: "John", age: 30 });
console.table(["apple", "banana", "orange"]);
console.error("Error message");
console.warn("Warning message");
```

2. **document.write()** - Writing directly to HTML document:

```javascript
document.write("<h1>Dynamic Content</h1>");
// Note: Using after page load will overwrite existing content
```

3. **innerHTML** - Modifying HTML elements:

```javascript
document.getElementById("output").innerHTML = "New content";
```

4. **alert()** - Browser popup:

```javascript
alert("Important message!");
```

### 6.4 JavaScript Comments

#### Types of Comments

1. **Single-line Comments:**

```javascript
// This is a single-line comment
let x = 5; // Inline comment
```

2. **Multi-line Comments:**

```javascript
/* This is a multi-line comment
   It can span multiple lines
   Useful for longer documentation
*/
```

3. **JSDoc Comments:**

```javascript
/**
 * Calculates the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}
```

### 6.5 Variables and Data Types

#### Variable Declaration

```javascript
// Using var (function-scoped)
var oldVariable = "old way";

// Using let (block-scoped)
let modernVariable = "new way";

// Using const (immutable binding)
const CONSTANT_VALUE = "cannot be reassigned";
```

#### Rules for Variable Names

- Must start with a letter, underscore, or dollar sign
- Can contain letters, numbers, underscores, and dollar signs
- Case-sensitive (`name` and `Name` are different)
- Cannot use reserved keywords (`let`, `function`, etc.)

#### Data Types

1. **Primitive Types:**

```javascript
// Number
let integer = 42;
let float = 3.14;
let infinity = Infinity;
let notANumber = NaN;

// String
let single = "Single quotes";
let double = "Double quotes";
let template = `Template literal: ${integer}`;

// Boolean
let isTrue = true;
let isFalse = false;

// Undefined
let undefinedVar;

// Null
let nullVar = null;

// Symbol
let symbol = Symbol("description");

// BigInt
let bigInt = 9007199254740991n;
```

2. **Reference Types:**

```javascript
// Object
let person = {
  name: "John",
  age: 30,
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};

// Array
let fruits = ["apple", "banana", "orange"];

// Function
let greet = function () {
  return "Hello!";
};

// Date
let now = new Date();
```

#### Type Checking and Conversion

```javascript
// Type checking
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (this is a known JavaScript quirk)
typeof {}; // "object"
typeof []; // "object"
typeof function () {}; // "function"

// Type conversion
String(123); // "123"
Number("123"); // 123
Boolean(1); // true
parseInt("123.45"); // 123
parseFloat("123.45"); // 123.45
```

### 6.6 Operators and Expressions

#### Arithmetic Operators

```javascript
// Basic arithmetic
let sum = 5 + 3; // Addition
let difference = 10 - 4; // Subtraction
let product = 6 * 7; // Multiplication
let quotient = 15 / 3; // Division
let remainder = 17 % 5; // Modulus
let power = 2 ** 3; // Exponentiation

// Increment/Decrement
let count = 1;
count++; // Postfix increment
++count; // Prefix increment
count--; // Postfix decrement
--count; // Prefix decrement
```

#### Comparison Operators

```javascript
// Basic comparisons
5 > 3; // true
5 < 3; // false
5 >= 5; // true
5 <= 4; // false

// Equality
"5" == 5; // true (loose equality)
"5" === 5; // false (strict equality)
"5" != 5; // false (loose inequality)
"5" !== 5; // true (strict inequality)
```

#### Logical Operators

```javascript
// AND, OR, NOT
let isAdult = age >= 18 && hasID; // Logical AND
let canAccess = isAdmin || isModerator; // Logical OR
let isNotBlocked = !isBlocked; // Logical NOT

// Short-circuit evaluation
let name = username || "Anonymous"; // Default value if username is falsy
let result = isValid && processForm(); // Only process if valid
```

#### Assignment Operators

```javascript
// Basic assignment
let x = 5;

// Compound assignment
x += 3; // x = x + 3
x -= 2; // x = x - 2
x *= 4; // x = x * 4
x /= 2; // x = x / 2
x %= 3; // x = x % 3
x **= 2; // x = x ** 2
```

### 6.7 Control Flow and Conditionals

#### If Statements

```javascript
// Basic if statement
if (age >= 18) {
  console.log("You are an adult");
}

// If-else statement
if (score >= 70) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// If-else if-else chain
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}
```

#### Switch Statements

```javascript
switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Wednesday":
    console.log("Mid-week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  default:
    console.log("Regular day");
}

// Switch with fall-through
switch (fruit) {
  case "apple":
  case "pear":
    console.log("Common fruit");
    break;
  case "dragon fruit":
    console.log("Exotic fruit");
    break;
}
```

#### Ternary Operator

```javascript
// Simple ternary
let status = age >= 18 ? "Adult" : "Minor";

// Nested ternary (use sparingly for readability)
let message =
  score >= 90 ? "Excellent" : score >= 70 ? "Good" : "Need improvement";
```

### 6.8 Loops

#### For Loop

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Looping through array
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// For...of loop (ES6)
for (const fruit of fruits) {
  console.log(fruit);
}

// For...in loop (for object properties)
const person = { name: "John", age: 30 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

#### While Loop

```javascript
// Basic while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// Do-while loop
let number;
do {
  number = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${number}`);
} while (number !== 6);
```

#### Array Iteration Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((num) => console.log(num));

// map
const doubled = numbers.map((num) => num * 2);

// filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// some
const hasEven = numbers.some((num) => num % 2 === 0);

// every
const allPositive = numbers.every((num) => num > 0);
```

### 6.9 Functions

#### Function Declaration

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const greet = function (name) {
  return `Hello, ${name}!`;
};

// Arrow function (ES6)
const greet = (name) => `Hello, ${name}!`;

// Function with default parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
```

#### Parameters and Arguments

```javascript
// Multiple parameters
function add(a, b) {
  return a + b;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Arguments object (in regular functions)
function logArgs() {
  console.log(arguments);
}

// Parameter destructuring
function processUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
```

#### Function Scope and Closure

```javascript
// Function scope
function outer() {
  let x = 10;

  function inner() {
    console.log(x); // Can access x from outer scope
  }

  inner();
}

// Closure example
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

### 6.10 Arrays

#### Array Creation and Access

```javascript
// Array creation
let fruits = ["apple", "banana", "orange"];
let numbers = new Array(1, 2, 3);
let matrix = [
  [1, 2],
  [3, 4],
];

// Accessing elements
console.log(fruits[0]); // 'apple'
console.log(matrix[0][1]); // 2
```

#### Array Methods

```javascript
// Modifying arrays
const arr = ["a", "b", "c"];

// Adding and removing elements
arr.push("d"); // Add to end
arr.unshift("x"); // Add to start
arr.pop(); // Remove from end
arr.shift(); // Remove from start

// Slicing and splicing
const sliced = arr.slice(1, 3); // Extract portion
arr.splice(1, 1, "new"); // Remove and insert

// Array transformation
const numbers = [1, 2, 3, 4, 5];

// Mapping
const doubled = numbers.map((num) => num * 2);

// Filtering
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Reducing
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Sorting
arr.sort(); // Alphabetical sort
numbers.sort((a, b) => a - b); // Numeric sort

// Searching
const index = arr.indexOf("b"); // Find index
const found = arr.includes("c"); // Check existence
```

#### Array Patterns and Practices

```javascript
// Array destructuring
const [first, second, ...rest] = arr;

// Spread operator
const combined = [...arr1, ...arr2];

// Array from iterable
const arrayFromString = Array.from("hello");

// Array filling
const zeros = new Array(3).fill(0);

// Finding elements
const user = users.find((u) => u.id === 123);
const userIndex = users.findIndex((u) => u.id === 123);
```

### 6.11 Objects

#### Object Creation and Properties

```javascript
// Object literal notation
const person = {
  name: "John",
  age: 30,
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Class syntax (ES6)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}
```

#### Working with Objects

```javascript
// Accessing properties
console.log(person.name); // Dot notation
console.log(person["name"]); // Bracket notation

// Adding and modifying properties
person.email = "john@example.com";
person["phone"] = "123-456-7890";

// Deleting properties
delete person.age;

// Object methods
Object.keys(person); // Get all keys
Object.values(person); // Get all values
Object.entries(person); // Get key-value pairs
Object.freeze(person); // Make immutable
Object.assign({}, person); // Shallow copy

// Property descriptors
Object.defineProperty(person, "id", {
  value: 12345,
  writable: false,
  enumerable: true,
  configurable: false,
});
```

#### Prototypes and Inheritance

```javascript
// Prototype chain
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Class inheritance (ES6)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    return `${this.name} barks`;
  }
}
```
